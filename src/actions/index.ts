export { getPaginatedProductsWithImages } from './product/product-pagination'
export { getProductBySlug } from './product/get-product-by-slug'
export { getStockBySlug} from './product/get-stock-by-slug'
export { createUpdateProduct} from './product/create-update-product'
export { deleteProductImage} from './product/delete-product-image'

export { login, authenticate } from './auth/login'
export { logout } from './auth/logout'
export { registerUser } from './auth/register'

export { getCountries } from './country/get-countries'

export { deleteUserAddress } from './address/delete-user-address'
export { getUserAddress } from './address/get-user-address'
export { setUserAddress, } from './address/set-user-address'

export { getOrderById } from './order/get-order-by-id'
export { getOrdersByUser } from './order/get-orders-by-user'
export { placeOrder } from './order/place-order'
export { getPaginatedOrders } from './order/get-paginated-orders'

export { paypalCheckPayment } from './payments/paypal-check-payment'
export { setTransactionId } from './payments/set-transaction-id'

export { changeUserRole } from './user/change-user-role'
export { getPaginatedUsers } from './user/get-paginater-users'

export { getCategories } from './category/get-categories'