// 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// open category
function openCategory(){
    const navbarCatalog = $('.navbar__catalog');
    const navbarContact = $('.navbar__contact');
    const catalogList = $('.catalog__list');
    navbarCatalog.onclick = () => {
        catalogList.classList.toggle('navbar__list--open');
        navbarContact.classList.toggle('navbar__contact--margin')
    }
}

const productApi = 'http://localhost:3000/product'
const productPuchasedApi = 'http://localhost:3000/productPurchased'
const productCartApi = 'http://localhost:3000/productCart'
const userApi = 'http://localhost:3000/user';
const notificationApi = 'http://localhost:3000/notificationList';

function app  (){
    openCategory()

    getProduct(renderClothesProduct)

    getProduct(renderGhitarProduct)

    getProduct(renderOfficeProduct)

    getProduct(productSearch)

    openCloseAddProductModal()
    handleAddProduct()

    getProductPuchased(renderProductPuchased)

    getProductCart(renderProductCart)

    getUserProfile(renderUserProfile)

    getUserProfile(userData)

    getUserProfile(userHeader)

    getNotification(renderNotification)

}
app()
/*GET, Render Course */

function getProduct(callback){
    fetch(productApi)
        .then( (response) => {
            return response.json();
        })
        .then(callback)
}

// search input


// render clothes product
function renderClothesProduct(products){

    const clothes = $('.product__type-clothes')
    const typeClothes = clothes.title
    
    const itemsTypeClothes = products.filter(item)

    function item(product){
        return product.productType === typeClothes
    }

    const htmlClothes = itemsTypeClothes.map( (item) => {
        return`
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        `
    })
    clothes.innerHTML = htmlClothes.join('')
}

// render Ghitar Product

function renderGhitarProduct(products) {

    const ghitars = $('.product__type-ghitar')
    const typeGhitar = ghitars.title
    
    const itemsTypeGhitar = products.filter(item)

    function item(product){
        return product.productType === typeGhitar
    }
    
    const htmlGhitar = itemsTypeGhitar.map( (item) => {
        return`
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        `
    })
    ghitars.innerHTML = htmlGhitar.join('')

}

function renderOfficeProduct(products) {

    const office = $('.product__type-office')
    const typeOffice = office.title
    
    const itemsTypeOffice = products.filter(item)

    function item(product){
        return product.productType === typeOffice
    }
    
    const htmlOffice = itemsTypeOffice.map( (item) => {
        return`
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        `
    })
    office.innerHTML = htmlOffice.join('')

}

function productSearch(products) {
    let arrProduct = []
    arrProduct= products;

    const inputSearch = $('input[name="search__input"]')
    console.log(inputSearch)
    inputSearch.oninput = () => {

        const searchTitle = $('.search__title')
        openFunction(searchTitle)
        const productSearchResult = $('.product__type-search')
        openFunction(productSearchResult)

        let inputSearchValue = inputSearch.value

        const resultProuct = arrProduct.filter( (product) => {
            return product.productName.toUpperCase().includes(inputSearchValue.toUpperCase())
        })
        const searchResult = $('.product__type-search')
        const htmls = resultProuct.map( (item) =>{
            return`
                <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                    
                <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                    <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                    <div class="product__describe">
                        <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                        <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                        <div class="product__price">
                            <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                            <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                        </div>
                    </div>
                </div>
                <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                    <i class="fas fa-times"></i>
                </button>
                
                <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                    Chỉnh sửa sản phẩm
                </button>

            </div>
            `
        })

        searchResult.innerHTML = htmls.join('')

        const closeClothes = $('#product__type-clothes')
        const closeGhitar = $('#product__type-ghitar')
        const closeOfice = $('#product__type-office')
        const closeClothesList = $('.product__type-clothes')
        const closeGhitarList = $('.product__type-ghitar')
        const closeOfficeList = $('.product__type-office')

        closeFunction(closeClothes)
        closeFunction(closeGhitar)
        closeFunction(closeOfice)
        closeFunction(closeClothesList)
        closeFunction(closeGhitarList)
        closeFunction(closeOfficeList)


    }



    
}


// open, close Modal
function openModal(element){
    element.classList.remove('close');
}
function closeModal(element){
    element.onclick = (e) => {
        const closeModalBtn =  e.target.closest('.close__setting-modal')
        const containerModal = e.target.closest('.container')
        if(closeModalBtn || containerModal){
            element.classList.add('close');
        }

    }
} 
// open, close  function

function openFunction(element){
    element.classList.remove('close');
}
function closeFunction(element){
    element.classList.add('close');
}

//     stopPropagation Modal;
    const overlayModals =$$('.overlay__modal')

    for (const overlayModal of overlayModals){
        overlayModal.addEventListener('click', (e) =>{
            e.stopPropagation();
    }
    )}

// Add, close Product
function openCloseAddProductModal(){
    const addProductModal = $('.add__product');
    const addProductBtn = $('.add__product-btn');

    addProductBtn.onclick = () => {
        openModal(addProductModal)
    }
    closeModal(addProductModal) 
}

//Add productand render New product  

    function createProduct(data, callback){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(productApi, options)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

// delete product item
function handleDeleteProduct(id) {

    let curDate = new Date()
    let hoursData = curDate.getHours()
    let minuData = curDate.getMinutes()
    let dayData = curDate.getDate()
    let monthData = curDate.getMonth()
    let yearData = curDate.getFullYear()
    const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData

    handleAddNotification(timeData ,'', 'Bạn đã xóa 1 sản phẩm', 'Sản phẩm của bạn đã được xóa khỏi hệ thống')
   
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(productApi + '/' + id , options)
    .then((response) => {
        return response.json();
    })
    .then( () => {
        const deleteItem = $('.remove__product-item-' + id)
        if(deleteItem){
            const modalShowItem = $('.product__container')
            const check = modalShowItem.classList.contains('close')
            check = true ? check : closeFunction(modalShowItem)
            deleteItem.remove()
        }
    });
}

// Edit Product Item

function editProduct(data, id, callback){
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(productApi + '/' + id, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

function handleEditProduct(id) {
    // Open and close Modal Edit
    const modalShowItem = $('.product__container')
    closeModal(modalShowItem)

    const editProductModal = $('.edit__product-modal');

    closeFunction(modalShowItem)
    openModal(editProductModal)
    closeModal(editProductModal)

    const editProductImg = $('#edit__img-product');
    const editImgLink = $('.edit-product__link-img');
    const editShowImg = $('.edit-img__container')

    // Render all to modal Edit
    const editNameInput = $('.edit__name-input')
    const editOldPriceInput = $('.edit__old-price-input')
    const editNewPriceInput = $('.edit__new-price-input')
    const editDescriptionInput = $('.edit__description-input')
    const editLinkImg = $('.edit-product__link-img')
    const editTypeProduct = $('.edit__type-product-input')

    const productUrlImg  = $('.product__img-' +id).title
    const productName = $('.product__name-' +  id).innerHTML;
    const productParagram = $('.product__paragram-' +  id).innerHTML
    const productPriceNew = $('.product__price--new-' +  id).innerHTML
    const productPriceOld = $('.product__price--old-' +  id).innerHTML
    const productType = $('.product__item-' +id).title
    
    editShowImg.style.backgroundImage = productUrlImg;
    editLinkImg.value = productUrlImg
    editNameInput.value = productName;
    editDescriptionInput.value = productParagram
    editNewPriceInput.value = productPriceNew
    editOldPriceInput.value = productPriceOld
    editTypeProduct.value = productType
    choseImg(editProductImg,editShowImg,editImgLink)

    const editInstallBtn = $('.edit__install-btn');
    editInstallBtn.onclick = () => {

        let curDate = new Date()
        let hoursData = curDate.getHours()
        let minuData = curDate.getMinutes()
        let dayData = curDate.getDate()
        let monthData = curDate.getMonth()
        let yearData = curDate.getFullYear()
        const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData
        handleAddNotification(timeData ,editLinkImg.value, 'Bạn đã chỉnh sửa thông tin của sản phẩm '+ editNameInput.value, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong thông tin của sản phẩm')

        const formData = {
            productImg: editLinkImg.value,
            productName: editNameInput.value,
            productOldPrice: editOldPriceInput.value,
            productNewPrice: editNewPriceInput.value,
            productDescription: editDescriptionInput.value,
            productType: editTypeProduct.value
        }

        alert('Thay đổi thành công')

        editProduct(formData, id , () => {
            getProduct(renderGhitarProduct)
        })
    }

}


function handleAddProduct(){

    // Chose Img Product 

    const inputAddImgProduct = $('#add__img-product');
    const imgProductShow = $('.product-img__container')
    const linkImgProduct = $('.product__link-img') 
    choseImg(inputAddImgProduct, imgProductShow, linkImgProduct);

    const addNewProduct = $('.add__btn');
    addNewProduct.onclick = () => {
        const nameProduct = $('input[name="add__name-product"]').value;
        const oldPriceProduct = $('input[name="add__old-price"]').value;;
        const newPriceProduct = $('input[name="add__new-price"]').value;
        const descriptionProduct = $('input[name="add__product-description"]').value;
        const linkImgProduct = $('input[name="link__img-product"]').value;
        const productType = $('input[name="type-product"]').value;
        const formData = {
            productImg: linkImgProduct,
            productName: nameProduct,
            productOldPrice: oldPriceProduct,
            productNewPrice: newPriceProduct,
            productDescription: descriptionProduct,
            productType: productType
        }

        let curDate = new Date()
        let hoursData = curDate.getHours()
        let minuData = curDate.getMinutes()
        let dayData = curDate.getDate()
        let monthData = curDate.getMonth()
        let yearData = curDate.getFullYear()
        const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData
        handleAddNotification(timeData ,linkImgProduct, 'Bạn đã thêm vào 1 sản phẩm '+ nameProduct, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong thông tin của sản phẩm');

        createProduct(formData, function(){
            getProduct(renderClothesProduct)
        })
       
    }
}



//  choseImg

function choseImg(choseImgInput, imgShow, linkImg, imgUser)  {
    choseImgInput.addEventListener('change', (e) => {
        var imgUrl = URL.createObjectURL(choseImgInput.files[0])
        imgShow.style.backgroundImage = 'url('+imgUrl+')';
        const addressFilesLink = choseImgInput.files[0].name
        linkImg.value = 'url(./assest/img/product/'+addressFilesLink+')';
        imgUser.style.backgroundImage = 'url('+imgUrl+')'
    })

}

// open function edit Product
    const btnOpenEditProduct = $('.edit__product');

    btnOpenEditProduct.onclick = () => {
        const btnRemoveItems =$$('.remove__product-item');
        const btnEditItems =$$('.edit__product-item-btn');
        for (const btnRemoveItem of btnRemoveItems){
            openFunction(btnRemoveItem);
        }
        for (const btnEditItem of btnEditItems){
            openFunction(btnEditItem);
        }
    };


const containerShowItem = $('.container__show-item')
// Show Item and Purchase
function HandleShowProduct(id){
    const productList = $('.product__list');
    productList.onclick= (e) =>{
        const productItemChose = e.target.closest('.product__container');
        const modalShowItem = $('.modal__show-item')
        if(productItemChose){
            openModal(modalShowItem)
            closeModal(modalShowItem)
        }
    }
    const productUrlImg  = $('.product__img-' +id).title
    const productName = $('.product__name-' +  id).innerHTML;
    const productParagram = $('.product__paragram-' +  id).innerHTML
    const productPriceNew = $('.product__price--new-' +  id).innerHTML
    const productPriceOld = $('.product__price--old-' +  id).innerHTML

    const showImgProduct = $('.show__product-item-img')
    const showProductHeader = $('.product__show-item__header');
    const showOldPrice = $('.show-product__price--old');
    const showNewPrice = $('.show-product__price--new');
    const showProductDescrible = $('.show__product-describle');
    const productDiscount = $('.show__product-discount')
    const productTotalValue = $('.product__total-value')
    const productQuantity = $('.product__quantity')

    showImgProduct.style.backgroundImage = productUrlImg;
    showProductHeader.innerHTML = productName;
    showOldPrice.innerHTML = productPriceOld;
    showNewPrice.innerHTML = productPriceNew;
    showProductDescrible.innerHTML = productParagram;
    


    // Discount
    const discoutValue = Math.round(eval((100 - (productPriceNew/productPriceOld) *100)))
    productDiscount.innerHTML = 'Ưu đã giảm tới ' + discoutValue + ' %'

    const quantityMinusBtn = $('.product__quantity--minus')
    const quantityPlusBtn = $('.product__quantity--plus')

    const puchaseProductBtn = $('.buy__product-puchase')

    const addProductCartBtn = $('.add__product-cart')

    quantityMinusBtn.onclick = () => {
        productQuantity.value--;
        const productQuantityValue = productQuantity.value
        if(productQuantityValue <= 0 ){
            alert('Bạn vui lòng nhập lại số lượng')
            productQuantity.value = 1
            productQuantityValue = 1
        }else{
            const productTotalOder = eval(productPriceNew * productQuantityValue)
            productTotalValue.innerHTML = productTotalOder
            openFunction(puchaseProductBtn)
            openFunction(addProductCartBtn)
        }
    }
    quantityPlusBtn.onclick = () => {
        const productQuantityValue = productQuantity.value
        productQuantity.value++;
        const productTotalOder = eval(productPriceNew * productQuantityValue)
        productTotalValue.innerHTML = productTotalOder
    }
    // Total Oder
    productQuantity.onblur = () => {
        const productQuantityValue = productQuantity.value
        if(productQuantityValue <= 0){
            closeFunction(puchaseProductBtn)
            closeFunction(addProductCartBtn)
            alert('Bạn vui lòng hãy nhập lại số lượng số lượng phải tối thiểu là 1')
        }else{
            openFunction(puchaseProductBtn)
            openFunction(addProductCartBtn)
        }
    }
    productQuantity.oninput = () => {
        const productQuantityValue = productQuantity.value
        if(productQuantityValue <= 0){
            closeFunction(puchaseProductBtn)
            closeFunction(addProductCartBtn)
        }else{
            const productTotalOder = eval(productPriceNew * productQuantityValue)
            productTotalValue.innerHTML = productTotalOder
            openFunction(puchaseProductBtn)
            openFunction(addProductCartBtn)
        }
    }
    // lấy ngày giờ mua hàng
    
    let curDate = new Date()
    let hoursData = curDate.getHours()
    let minuData = curDate.getMinutes()
    let dayData = curDate.getDate()
    let monthData = curDate.getMonth()
    let yearData = curDate.getFullYear()
    const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData

    // add dữ liệu vào productCartPuchase

    puchaseProductBtn.onclick = () => {
        const formData = {
            productImg: productUrlImg,
            productName: productName,
            productOldPrice: productPriceOld,
            productNewPrice: productPriceNew,
            productQuantity: productQuantity.value,
            productTotalValue: productTotalValue.innerHTML,
            productDescription: productParagram,
        }
        createProductPuchased(formData, () =>{
            getProductPuchased(renderProductPuchased);
        } )

        handleAddNotification(timeData ,productUrlImg, 'Bạn đã mua mặt hàng ' + productName, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong đơn hàng đã mua của bạn' )

    }
    // add dữ liệu vào productCart
        addProductCartBtn.onclick = () => {
            const formData = {
                productImg: productUrlImg,
                productName: productName,
                productOldPrice: productPriceOld,
                productNewPrice: productPriceNew,
                productQuantity: productQuantity.value,
                productTotalValue: productTotalValue.innerHTML,
                productDescription: productParagram,
            }
            handleCreateProductCart(formData , () => {
              getProductCart(renderProductCart)  
            })

            handleAddNotification(timeData ,productUrlImg, 'Bạn đã thêm vào giỏ hàng ' + productName, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong giỏ hàng của bạn' )
        }
}

// Open Modal ProductCart
const navbarItemCart = $('.navbar__item-cart');
const productOderModal = $('.product__odered')
navbarItemCart.onclick = () => {
    openModal(productOderModal)
}
    closeModal(productOderModal)

    // add product cart Puchase
function createProductPuchased (data, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(productPuchasedApi, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

// lấy dữu liệu product Cart
function getProductPuchased(callback) {
    fetch(productPuchasedApi)
        .then( (response) => {
            return response.json();
        })
        .then(callback)
}
// render ra dữ liệu của product cart
function renderProductPuchased(productPuchases){
    const listProductPuchases = $('.product__odered-list-bought')
    var htmls = productPuchases.map( (productPuchase) => {
        return`
        <li class="product__odered-item-bought odered-item-bought-${productPuchase.id}">
            <div title="${productPuchase.productImg}" style="background-image:${productPuchase.productImg}" class="odered-item-bought__img product__puchase-img"></div>
            <h4 class="odered-item-bought__name product__puchase-name">${productPuchase.productName}</h4>
            <div class="odered-item-bought-price">
                <span class="odered-item-bought__old-price">${productPuchase.productOldPrice}</span>
                <span class="odered-item-bought__price--new">${productPuchase.productNewPrice}</span>
            </div>
            <span class="odered-item-bought__quantity product-puchase__quantity">${productPuchase.productQuantity}</span>
            <span class="odered-item-bought__total-value">${productPuchase.productTotalValue}</span>
            <div class="odered-item-bought-btn">
                <button onclick="handleDeleteProductPurchase(${productPuchase.id})" class="item__btn cancel__oder-btn cancel__oder-btn-${productPuchase.id}">
                    Hủy đơn hàng
                </button>

                <button onclick="handleOpenProductProfile(${productPuchase.id}, ${productPuchase.productOldPrice}, ${productPuchase.productNewPrice}, ${productPuchase.productQuantity}, ${productPuchase.productTotalValue})" class="item__btn setting__oder-btn">
                    Chỉnh sửa thông tin
                </button>
            </div>
        </li>
        `
    })
    listProductPuchases.innerHTML = htmls.join('');
}
// Xóa phần tử trong product cart
function handleDeleteProductPurchase(id){

    let curDate = new Date()
    let hoursData = curDate.getHours()
    let minuData = curDate.getMinutes()
    let dayData = curDate.getDate()
    let monthData = curDate.getMonth()
    let yearData = curDate.getFullYear()
    const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData

    handleAddNotification(timeData ,'', 'Bạn đã hủy 1 đơn hàng thành công', 'Đơn hàng của bạn đã được xóa khỏi hệ thống')
    
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(productPuchasedApi + '/' + id , options)
    .then((response) => {
        return response.json();
    })
    .then( () => {
        const deleteItem = $('.odered-item-bought-' + id)
        if(deleteItem){
            alert('Bạn đã hủy đơn hàng thành công')
            deleteItem.remove()
        }
    });
}

//Lấy dữ liệu các mặt hàng đc thêm vào giỏ 
function getProductCart(callback) {
    fetch(productCartApi)
        .then( (response) => {
            return response.json();
        })
        .then(callback)
}
function renderProductCart(productCartItems){
    const listProductCart = $('.product__odered-list-cart')
    var htmls = productCartItems.map( (productCartItem) =>{
        return `
        <li class="product__odered-item-bought odered-item-bought-${productCartItem.id}">
        <div title="${productCartItem.productImg}" style="background-image:${productCartItem.productImg}" class="odered-item-bought__img product__cart-img"></div>
            <h4 class="odered-item-bought__name product__cart-title">${productCartItem.productName}</h4>
            <div class="odered-item-bought-price">
                <span class="odered-item-bought__old-price">${productCartItem.productOldPrice}</span>
                <span class="odered-item-bought__price--new product__cart-new-price">${productCartItem.productNewPrice}</span>
            </div>
            <input oninput = "cacuTotalValue(${productCartItem.id})" type="number" class="odered-item-bought__quantity product__cart-quantity-item " value="${productCartItem.productQuantity}">
            <span class="odered-item-bought__total-value product-cart__total-value">${productCartItem.productTotalValue}</span>
            <div class="odered-item__bought-cart-btn">
                <button onclick="handleDeleteProductCart(${productCartItem.id})" class="item__btn cancel__oder-btn">
                    Xóa khỏi giỏ hàng
                </button>
                <button onclick="dumpProductCartPuchase(${productCartItem.id}, ${productCartItem.productOldPrice}, ${productCartItem.productNewPrice}, ${productCartItem.productQuantity},  ${productCartItem.productTotalValue})"  class="item__btn buy__product-cart-btn">
                    Mua hàng
                </button>
            </div>
        </li>
        `
    })
    listProductCart.innerHTML = htmls.join('') 
}

function cacuTotalValue (id){
    const productCartQuantityItem = $$('.product__cart-quantity-item')[id-1].value;

    const btnPuchaseProductCart = $$('.buy__product-cart-btn')[id - 1]

    if(productCartQuantityItem <= 0){
        closeFunction(btnPuchaseProductCart)
    }else{
        openFunction(btnPuchaseProductCart)
        let productCartTotalValue = $$('.product-cart__total-value')[id-1]

        const productCartNewPrice = $$('.product__cart-new-price')[id-1].innerHTML

        productCartTotalValue.innerHTML = eval(productCartQuantityItem * productCartNewPrice)
    }


}

function handleCreateProductCart(data, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(productCartApi, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

function handleDeleteProductCart(id){

    let curDate = new Date()
    let hoursData = curDate.getHours()
    let minuData = curDate.getMinutes()
    let dayData = curDate.getDate()
    let monthData = curDate.getMonth()
    let yearData = curDate.getFullYear()
    const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData

    handleAddNotification(timeData ,'', 'Bạn đã xóa 1 sản phẩm', 'Sản phẩm của bạn đã được xóa khỏi hệ thống')

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(productCartApi + '/' + id, options)
    .then((response) => {
        return response.json();
    })
    .then( () =>{
        const removeProductCartItem = $('.odered-item-bought-' + id)
        if(removeProductCartItem){
            removeProductCartItem.remove()
        }
    });
} 

function dumpProductCartPuchase(id, productOldPrice, productNewPrice, productQuantity, productTotalValue){

    const productCartImgs = $$('.product__cart-img');
    const productCartImg = productCartImgs[id - 1].title

    const productCartNames = $$('.product__cart-title')
    const productCartName = productCartNames[id - 1].innerHTML

    let curDate = new Date()
        let hoursData = curDate.getHours()
        let minuData = curDate.getMinutes()
        let dayData = curDate.getDate()
        let monthData = curDate.getMonth()
        let yearData = curDate.getFullYear()
        const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData
        handleAddNotification(timeData ,productCartImg, 'Bạn đã mua sản phẩm '+ productCartName, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong sản phẩm đã mua')

    const formData  = {
        productImg:  productCartImg,
        productName: productCartName,
        productOldPrice: productOldPrice,
        productNewPrice: productNewPrice,
        productQuantity: productQuantity,
        productTotalValue:productTotalValue
    }
    
        createProductPuchased(formData, () => {
            getProductPuchased(renderProductPuchased)
        })

        handleDeleteProductCart(id)

        alert('Bạn đã mua hàng thành công')
}

// Edit User 

function getUserProfile(callback) {
    fetch(userApi)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

function renderUserProfile(userProfile){
    const userProfileShow = $('.user__profile')
    const htmls = `
    <div class="container">

        <div class="grid wide item">
            
            <div class="item__overlay overlay__modal overlay__modal-profile">
                
                <div class="row profile__list">
                    
                    <div class="profile-item col col-4">
                        <div style="background-image: ${userProfile[0].userImg}" class="show__item-img user-img-render"></div>
                        <h4 class="user__name">${userProfile[0].userName}</h4>
                        <h4 class="edit__user-slogan">
                            <i class="fas fa-pen"></i>
                            Sửa thông tin cá nhân
                        </h4>
                    </div>

                    <div class="profile-item col col-8">
                        
                        <div class="user__setting">

                            <div class="page__user-title">
                                <h4 class="page__user-header">Hồ sơ của tôi</h4>
                                <p class="page__user-descriiption">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
                            </div>

                            <ul class="user__setting-body user__show-profile">
                                
                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide">
                                        <div class="row">
                                            <div class="col col-1"></div>
                                            <div class="col col-3">
                                                <div style="background-image:${userProfile[0].userImg};" class="user__setting-img"></div>
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 chose__user-profile close">
                                                <label for ="add__img-user" class="item__btn btn__chose-img">Chọn ảnh</label>
                                                <input type="file" hidden id="add__img-user" required>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide">
                                        <div class="row edit__user-item">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Tên đăng nhập:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input class="user__name-input" type="text" disabled value="${userProfile[0].userName}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                <div class="grid wide">
                                    <div class="row edit__user-item">
                                        <div class="col col-1"></div>
                                        <div class="col col-3 edit__name-profile">
                                            Đường dẫn ảnh:
                                        </div>
                                        <div class="col col-1"></div>
                                        <div class="col col-6 edit__input">
                                            <input class="link__img-user" type="text" disabled value="${userProfile[0].userImg}">
                                        </div>
                                    </div>
                                </div>
                            </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide">
                                        <div class="row edit__user-item">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Họ và tên:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input class="user__full-name-input" type="text" disabled value="${userProfile[0].name}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide">
                                        <div class="row edit__user-item">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Email:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input class="user__email-input" type="email" disabled value="${userProfile[0].email}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide">
                                        <div class="row edit__user-item">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Số điện thoại:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input class="user__phone-number-input" type="number" disabled value="${userProfile[0].phone}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide edit__user-item">
                                        <div class="row">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Giới tính:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__sex">
                                                <input class"input__sex-profile" type="radio" name="sex" id="" value="Nam" disabled>
                                                <div class="edit__sex-name">Nam</div>
                                                <input class"input__sex-profile" type="radio" name="sex" id="" value="Nữ" disabled>
                                                <div class="edit__sex-name">Nữ</div>
                                                <input class"input__sex-profile" type="radio" name="sex" id="" value="Khác" disabled>
                                                <div class="edit__sex-name">Khác</div>
                                            </div>
                                            <div class="col col-1"></div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide edit__user-item">
                                        <div class="row">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Ngày sinh:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input class="user__birthday-input" type="text" disabled value="${userProfile[0].date}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="col col-12 edit__product-item edit__product-item-js">
                                    <div class="grid wide edit__user-item">
                                        <div class="row">
                                            <div class="col col-1"></div>
                                            <div class="col col-3 edit__name-profile">
                                                Địa chỉ:
                                            </div>
                                            <div class="col col-1"></div>
                                            <div class="col col-6 edit__input">
                                                <input name = "input__address-user" class="user__address-input" type="text" disabled value="${userProfile[0].address}">
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <div class="profile-item user__setting-controler close edit__product-item-js">
                                    <button onclick="handleEditUser(${userProfile[0].id})" class="item__btn user__setting-btn">
                                        Lưu chỉnh sửa
                                    </button>
                                </div>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div class="close__modal close__show-item">
                <i class="far fa-window-close"></i>
            </div>

        </div>

    </div>
    `
    userProfileShow.innerHTML = htmls;

    const userSex = $('input[value=' + userProfile[0].sex + ']');
    userSex.checked = true;
    enableInput(userSex);
    settingEditProfile();
    choseImgUser();

    //  Sự kiện ngừng nổi bọt
    const  overlayEditUser = $('.overlay__modal-profile')
    overlayEditUser.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

const editUser = $('.edit__user-btn')
const modalEditUser = $('.user__profile')
editUser.onclick = () => {
    openModal(modalEditUser)
}

closeModal(modalEditUser)

// open edit profile Modal
function settingEditProfile(){
    const editUserBtn = $('.edit__user-slogan');
    const choseUserImg = $('.chose__user-profile');
    const userBtnUpdate = $('.user__setting-controler')
    const userNameInput = $('.user__name-input');
    const userFullNameInput = $('.user__full-name-input');
    const userEmailInput = $('.user__email-input');
    const userPhoneNumberInput = $('.user__phone-number-input');
    const userBirthDayInput = $('.user__birthday-input');
    const editMaleInputs = $('input[value=Nam]')
    const editFemaleInputs = $('input[value=Nữ]')
    const editOtherInputs = $('input[value=Khác]')
    const userAddressInput = $('.user__address-input')

    
    editUserBtn.onclick = () => {
        openFunction(choseUserImg)
        openFunction(userBtnUpdate);
        enableInput(userFullNameInput);
        enableInput(userEmailInput);
        enableInput(userPhoneNumberInput);
        enableInput(userNameInput)
        enableInput(userBirthDayInput)
        enableInput(editMaleInputs)
        enableInput(editFemaleInputs)
        enableInput(editOtherInputs)
        enableInput(userAddressInput)
    }
} 

function enableInput(e){
    e.disabled = false
}

function choseImgUser(){
    const userImgRender = $('.user-img-render')
    const choseImgUserBtn = $('#add__img-user')
    const userRenderImg = $('.user__setting-img')
    const linkImgUser = $('.link__img-user')
    choseImg(choseImgUserBtn, userRenderImg,linkImgUser,userImgRender)
}

function handleEditUser (id){
    const userName = $('.user__name-input').value
    const userLinkImg = $('.link__img-user').value
    const userFullName = $('.user__full-name-input').value
    const userEmail = $('.user__email-input').value
    const userPhoneNumber = $('.user__phone-number-input').value
    const userBirthDay = $('.user__birthday-input').value
    const userAddress = $('input[name = "input__address-user"]').value

    const inputSexUsers = $$('input[type="radio"]')

    let userValueSex = ''
    
    for (var i = 0; i < inputSexUsers.length; i++) {
        if(inputSexUsers[i].checked === true){
            userValueSex = inputSexUsers[i]. value;
        }
    }

    let curDate = new Date()
    let hoursData = curDate.getHours()
    let minuData = curDate.getMinutes()
    let dayData = curDate.getDate()
    let monthData = curDate.getMonth()
    let yearData = curDate.getFullYear()
    const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData
    handleAddNotification(timeData ,userLinkImg, 'Bạn đã chỉnh sửa thông tin của mình' , 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong thông tin cá nhân của mình' )

    const formData = {
        address: userAddress,
        userImg: userLinkImg,
        userName: userName,
        name: userFullName,
        phone: userPhoneNumber,
        email: userEmail,
        sex: userValueSex,
        date: userBirthDay,
    }
    
    editUserData(formData, id, () =>{
        const modalUserProfile = $('.user__profile')
    })
    
}   

function editUserData(data, id, callback){
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(userApi + '/' + id, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

function handleOpenProductProfile(id, oldPrice, newPrice, productQuantity, totalValue){

    const productCartProfileModal = $('.product__cart-profile')
    openModal(productCartProfileModal)
    closeModal(productCartProfileModal)

    let productLinkImgs = $$('.product__puchase-img')
    const imgLinkItem = productLinkImgs[id - 1].title

    const productNames = $$('.product__puchase-name')
    const productName = productNames[id - 1].innerHTML


    const productCartProfileImg = $('.product-cart-profile__img')

    const productQuantityProfile = $('.item__quantity-profile')

    const productProfileTotalValue = $('.product-profile__total-value')

    const productProfileTitle = $('.product__cart-name')
    const nameProfileProduct = $('.name__profile-product-input')

    productProfileTitle.innerHTML = productName
    nameProfileProduct.value = productName

    productCartProfileImg.style.backgroundImage = imgLinkItem
    productQuantityProfile.value = productQuantity
    productProfileTotalValue.value = totalValue

    const quantityMinusBtn = $('.quantity--minus-btn')
    const quantityPlusBtn = $('.quantity--plus-btn')
    const updateProductProfile = $('.product__cart-detail-btn')

    const productSetingCart = $('.product__seting-cart')
    productSetingCart.onclick = () => {
        const userProfile = $('.user__profile')
        openModal(userProfile)
    }

    quantityMinusBtn.onclick = () => {
        productQuantityProfile.value --;
        if(productQuantityProfile.value <= 0){
            alert('Bạn vui lòng nhập lại số lượng')
            productQuantityProfile.value = 1
        }else{
            productProfileTotalValue.value = eval(productQuantityProfile.value * newPrice)
            openFunction(updateProductProfile)
        }
    }
    quantityPlusBtn.onclick = () => {
        productQuantityProfile.value ++
        productProfileTotalValue.value = eval(productQuantityProfile.value * newPrice)
    }

    productQuantityProfile.oninput = () => {
        if(productQuantityProfile.value <= 0){
            closeFunction(updateProductProfile)
            // alert('Bạn vui lòng nhập lại số lượng tối thiểu là 1')
        }else{
            productProfileTotalValue.value = eval(productQuantityProfile.value * newPrice)
            openFunction(updateProductProfile)
        }
    }

    productQuantityProfile.onblur = () => {
        if(productQuantityProfile.value <= 0){
            closeFunction(updateProductProfile)
            alert('Bạn vui lòng hãy nhập lại số lượng số lượng phải tối thiểu là 1')
        }else{
            openFunction(updateProductProfile)
        }
    }

    updateProductProfile.onclick = () => {
        let curDate = new Date()
        let hoursData = curDate.getHours()
        let minuData = curDate.getMinutes()
        let dayData = curDate.getDate()
        let monthData = curDate.getMonth()
        let yearData = curDate.getFullYear()
        const timeData =  hoursData + ':' + minuData+ ' ' + dayData + '/' + monthData + '/' + yearData
        handleAddNotification(timeData , imgLinkItem, 'Bạn đã chỉnh sửa thông tin của đơn hàng đặt '+ productName, 'Thông tin chi tiết của sản phẩm bạn vui lòng xem lại ở trong sản phẩm đã mua')
        
        handleEditProductPuchased(id, oldPrice, newPrice, imgLinkItem, productName)
    }
}

function handleEditProductPuchased(id, oldPrice, newPrice, imgLinkItem, productName){
    const quantityProfileValue = $('.item__quantity-profile').value
    const profileTotalValue = $('.product-profile__total-value').value

    const formData = {
      productImg: imgLinkItem,
      productName: productName,
      productOldPrice: oldPrice,
      productNewPrice: newPrice,
      productQuantity: quantityProfileValue,
      productTotalValue: profileTotalValue,
    }   
    editProductPuchaseData(formData, id, () => {
        getProductPuchased(renderProductPuchased)
    })


}

function editProductPuchaseData(data, id, callback){
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(productPuchasedApi+ '/' + id, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}

function userData(userProfile){
    const nameCustomer = $('.name__customer-input')
    const addressCustomer = $('.address__customer-input')
    const phoneNumberCustomer = $('.phone-number__customer-input')

   nameCustomer.value = userProfile[0].name
   addressCustomer.value = userProfile[0].address
   phoneNumberCustomer.value = userProfile[0].phone
}

const informationUser = $('.information__user')
function userHeader(users){
    const user = users[0].userImg


    const htmls = `
        <div style="background-image: ${user};" class="user__img"></div>
        <ul class="user__setting-list">
            <li class="user__setting-item">
                <i class="fas fa-address-card user__img-icon"></i>
                <span>Thông tin cá nhân</span>
            </li>
        </ul>
    `
    informationUser.innerHTML = htmls

}

informationUser.onclick = (e) => {
    const settingUserBtn =  e.target.closest('.user__setting-item')

    if(settingUserBtn){
        openModal(modalEditUser)
    }
}

function getNotification(callback){
    fetch(notificationApi)
    .then(function(response){
        return response.json();
    })
    .then(callback)
}

function renderNotification(notificationItems){
    const notificationList = $('.notification__list')
    const htmls = notificationItems.map((notificationItem) => {
        return`
        <li class="notification__item notification__item-${notificationItem.id} notification__no-seen">
            <h5 class="notification-time">${notificationItem.notificationTime}</h5>
            <div class="notification-body">
                <div style="background-image:${notificationItem.notificationImg}" class="notification__img"></div>
                <div class="notification__description">
                    <h4 class="notification__name">${notificationItem.notificeName}</h4>
                    <p class="notification__paragram">${notificationItem.notificationDescription}</p>
                </div>
                <i onclick="deleteNotification(${notificationItem.id})" class="far fa-times-circle remove-notication"></i>
            </div>
        </li>
        `
    })
    const numberNotifications = $('.number__notification')
    numberNotifications.innerHTML = notificationItems.length
    notificationList.innerHTML = htmls.join('')
}

function handleAddNotification(notificationTime ,notificationImg, notificeName, notificationDescription){
    const formData ={
        notificeName: notificeName,
        notificationImg: notificationImg,
        notificationDescription: notificationDescription,
        notificationTime: notificationTime
    }
    createNotification(formData, () => {
        getNotification(renderNotification);
    })

}


function createNotification(data, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(notificationApi, options)
    .then((response) => {
        return response.json();
    })
    .then(callback);
}


const notificationList = $('.notification__list')
notificationList.onclick = (e) => {
    const numberNotifications = $('.number__notification')
    const notificationNoSeen = e.target.closest('.notification__no-seen')
    notificationNoSeen.classList.remove('notification__no-seen')
    numberNotifications.innerHTML = $$('.notification__no-seen').length
}

function deleteNotification(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(notificationApi +'/' + id, options)
    .then((response) => {
        return response.json();
    })
    .then( () => {
        const deleteNotificationItem = $('.notification__item-'+ id)
        if(deleteNotificationItem){
            alert('Bạn đã xóa thông báo thành công')
            deleteNotificationItem.remove()
        }

    });
}