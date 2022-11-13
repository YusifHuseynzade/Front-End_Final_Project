(function() {

    const productsContainer = document.querySelector("#grid");
    const cartContainer = document.querySelector("#shopping-cart");
    const cartContent = document.querySelector("#cart-content");
    const toggleCartBtn = document.querySelector("#toggle-cart-btn");
    const clearCartBtn = document.querySelector("#clear-cart");
    const checkoutBtn = document.querySelector("#checkout-btn");
    const totalPriceContainer = document.querySelector("#total-price");
  
    // İstifadə olunan funksiyalar
  
    function toggleCart() {
    // Səbətdəki keçidləri təyin etmək 
      cartContainer.classList.toggle("open");
    }
  
    function getLSContent() {
      // Local yaddaşdan məlumat əldə etmək
      // Əgər yoxdursa, yeni bir boş array yaratmaq 
      const lsContent = JSON.parse(localStorage.getItem("products")) || [];
      return lsContent;
    }
  
    function setLSContent(lsContent) {
      // Məlumatları local yaddaşda saxlamaq
      localStorage.setItem("products", JSON.stringify(lsContent));
    }
  
    function calculateTotal(prices) {
      // Səbətə əlavə olunacaq məhsulların toplam dəyərini hesablamaq
      return prices.reduce(function(prev, next) {
        return prev + next;
      }, 0);
    }
  
    function getCartItemPrices() {
      // Cəmi hesablamaq üçün səbətdəki əşyalardan qiymətlərini çıxarmaq
      const prices = [];

      let nums = cartContent.querySelectorAll("tr td:nth-child(3)");
  
      if (nums.length > 0) {
        for (let cell = 0; cell < nums.length; cell++) {
          let num = nums[cell].innerText;
          num = num.replace(/[^\d]/g, "");
          num = parseFloat(num);
          prices.push(num);
        }
        return prices;
      } else {
        return;
      }
    }
  
    function displayCartTotal() {
      // Səbətə əlavə olunan bütün məhsulların toplam dəyərini göstərmək
      const prices = getCartItemPrices();
      let total = 0;
      if (prices) {
        total = calculateTotal(prices);
        totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
          2
        )}</span>`;
      } else {
        totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
      }
    }
  
    function displayProducts() {
      // Səbətdə bütün məhsulların məlumatlarını detaylı şəkildə göstərmək
  
      // Yerli yaddaşdan məlumatları əldə etmək
      const lsContent = getLSContent();
      let productMarkup = "";
      // Karta əlavə olunacaq məhsulların məlumatlarını yaratmaq
      if (lsContent !== null) {
        for (let product of lsContent) {
          productMarkup += `
            <tr>
            <td><img class="cart-image" src="${product.image}" alt="${
            product.name
          }" width="120"></td>
            <td>
              ${product.name}
            </td>
            <td>${product.price}</td>
            <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
            </tr>
          `;
        }
      } else {
        // Yerli yaddaşda heç bir məzmun yoxdursa, istifadəçiyə bununla bağlı xəbərdarlıq vermek.
        productMarkup = "Your cart is empty.";
      }
      // DOM-a işarələmə əlavə etmək
      cartContent.querySelector("tbody").innerHTML = productMarkup;
    }
  
    function saveProduct(clickedBtn) {
      // Seçilmiş məhsulu yaddaşda saxlamaq və bununla birlikdə səbətdə göstərmək
  
      
      const productId = clickedBtn.getAttribute("data-id");
      const card = clickedBtn.parentElement.parentElement;
      const cardInfo = clickedBtn.parentElement;
      const prodImage = card.querySelector("img").src;
      const prodName = cardInfo.querySelector("p").textContent;
      const prodPrice = cardInfo.querySelector(".card__price").textContent;
  
      let isProductInCart = false;
  
      const lsContent = getLSContent();
  
     
      
  
      // Səbətə məhsul əlavə etmək üçün seçilmiş məhsul məlumatını təmsil edən obyekt yaratmaq, və onu yerli yaddaş array-ə daxil etmək.
      
      if (!isProductInCart) {
        lsContent.push({
          id: productId,
          image: prodImage,
          name: prodName,
          price: prodPrice
        });
  
        
        setLSContent(lsContent);
        
        displayProducts();
      }
    }
  
    function removeProduct(productId) {
      // Məhsulu local yaddaşdan və array-dən çıxarmaq. 
  
      // Local yaddaşdan məhsulların sihayisini əldə etmək
      const lsContent = getLSContent();
  
      // Məhsulu silmək üçün indeksini əldə etmək
      let productIndex;
      lsContent.forEach(function(product, i) {
        if (product.id === productId) {
          productIndex = i;
        }
      });
  
      // Local yaddaş Array-indəki məhsullarda dəyişiklik etmək və seçilmiş mıhsulu silmək
  
      lsContent.splice(productIndex, 1);
      // Local yaddaşı yeniləmək
      setLSContent(lsContent);
  
      displayProducts();
    }
  
    function clearCart() {
      // Səbətdəki bütün məhsulları silmək 
  
      // Local yaddaşdan məhsul məlumatlarını əldə etmək
      const lsContent = getLSContent();
      // Local yaddaşda boş array
      lsContent.splice(0, lsContent.length);
      // Local yaddaşı yeniləmək
      setLSContent(lsContent);
      // səbətdəki məzmunu yenidən göstərmək
      displayProducts();
    }
  
    function checkout() {
      // İstifadəçi yoxlama prosesini təsdiq etdikdən sonra və sadəcə səbəti təmizləmək
      const cartProducts = cartContent.querySelector("tbody").innerHTML;
      if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
        clearCart();
      } else {
        return;
      }
    }
  
  
  
    // Səhifənin yüklənməsi
    document.addEventListener("DOMContentLoaded", function(e) {
      // Səbətdəki məhsulların siyahısını, əgər varsa, səhifə yüklənməsində göstərin
      displayProducts();
      displayCartTotal();
    });
  
    // Alış-veriş səbətini açmaq və bağlamaq
    // Səbətə kliklədikdə
    toggleCartBtn.addEventListener("click", function(e) {
      e.preventDefault();
      toggleCart();
    });
  
    // Məhsulu səbətdə və Local yaddaşda saxlayın
    // Səbətə kliklədikdə
    productsContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("add-to-cart")) {
        e.preventDefault();
        const clickedBtn = e.target;
        saveProduct(clickedBtn);
      }
    });
  
    productsContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("add-to-cart")) {
        displayCartTotal();
      }
    });
  
    // cartContent tablosunun click-nə removeProduct-ı bağlamaq
    cartContent.querySelector("tbody").addEventListener("click", function(e) {
      e.preventDefault();
    // klik etdiyimiz düymə üçün hədəf teyin etmək
      const clickedBtn = e.target;
      // Əgər silmə düyməsidirsə,
      if (e.target.classList.contains("remove")) {
        // data-id dəyərini əldə etmək
        const productId = clickedBtn.getAttribute("data-id");
        // məhsulu silmək üçün id-sindən istifadə etmək
        removeProduct(productId);
        // Bu zaman siyahıdan bir məhsul silmək və yənidən səbətdəki məlumatları göstərmək yoxdursa boş bir səbət qaytaracaq.


        displayCartTotal();
      }
    });
  
   
    clearCartBtn.addEventListener("click", function(e) {
      e.preventDefault();
      clearCart();
    });
    clearCartBtn.addEventListener("click", displayCartTotal);
  

    checkoutBtn.addEventListener("click", function(e) {
      e.preventDefault();
      checkout();
    });
    checkoutBtn.addEventListener("click", displayCartTotal);
  })();