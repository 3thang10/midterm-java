import classNames from 'classnames/bind';
import Banner from '~/components/Banner';
import OrderDetail from '~/components/OrderDetail';
import { getOrderDetails, getShippingInfor } from '~/utils/localStorage';
import { priceFormat } from '~/utils/priceFormat';
import CartEmpty from '~/components/CartEmpty';
import styles from './CheckoutDone.module.scss';

const cx = classNames.bind(styles);

function CheckoutDone() {
  const productList = getOrderDetails();
  const shippingInfor = getShippingInfor();

  if (!shippingInfor || !shippingInfor.orderNumber || !shippingInfor.orderDate) {
    // Handle the case where shipping information is missing or incomplete
    return <p>Error: Unable to retrieve order information.</p>;
  }

  return (
    <>
      <Banner heading="Checkout">Order received</Banner>
      <div className={cx('inner')}>
        {productList.length !== 0 ? (
          <div className={cx('order-container')}>
            <div className={cx('order-infos')}>
              <h1 className={cx('thanks-title')}>Thank you. Your order has been received.</h1>
              <ul className={cx('order-info')}>
                <li className={cx('info', 'order-number')}>
                  <span>Order number:</span>
                  <strong>{shippingInfor.orderNumber}</strong>
                </li>
                <li className={cx('info', 'order-date')}>
                  <span>Date:</span>
                  <strong>{shippingInfor.orderDate}</strong>
                </li>
                <li className={cx('info', 'order-total')}>
                  <span>Total:</span>
                  <strong>${priceFormat(shippingInfor.totalPrice)}</strong>
                </li>
                <li className={cx('info', 'order-payment')}>
                  <span>Payment method:</span>
                  <strong>{shippingInfor.payment}</strong>
                </li>
              </ul>
            </div>

            <div className={cx('order-details')}>
              <h1 className={cx('order-details-title')}>Order details</h1>
              <OrderDetail
                itemList={productList}
                orderNumber={shippingInfor.orderNumber}
                orderDate={shippingInfor.orderDate}
              />
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
}

export default CheckoutDone;

//import classNames from 'classnames/bind';
//
//import Banner from '~/components/Banner';
//import OrderDetail from '~/components/OrderDetail';
//import { getOrderDetails, getShippingInfor } from '~/utils/localStorage';
//import { priceFormat } from '~/utils/priceFormat';
//import CartEmpty from '~/components/CartEmpty';
//import styles from './CheckoutDone.module.scss';
//
//const cx = classNames.bind(styles);
//
//function CheckoutDone() {
//  const productList = getOrderDetails();
//  console.log('hihi1', productList)
//  const shippingInfor = getShippingInfor();
//
//  return (
//    <>
//      <Banner heading={'Checkout'}>Order recived</Banner>
//      <div className={cx('inner')}>
//        {productList.length !== 0 ? (
//          <div className={cx('order-container')}>
//            <div className={cx('order-infors')}>
//              <h1 className={cx('thanks-title')}>Thank you. your order has been received.</h1>
//              <ul className={cx('order-infor')}>
//                <li className={cx('infor', 'order-number')}>
//                  <span>Order number:</span>
//                  <strong>{shippingInfor.orderNumber}</strong>
//                </li>
//                <li className={cx('infor', 'order-date')}>
//                  <span>Date:</span>
//                  <strong>{shippingInfor.orderDate}</strong>
//                </li>
//                <li className={cx('infor', 'order-total')}>
//                  <span>Total:</span>
//                  <strong>${priceFormat(shippingInfor.totalPrice)}</strong>
//                </li>
//                <li className={cx('infor', ' order-payment')}>
//                  <span>Payment method:</span>
//                  <strong>{shippingInfor.payment}</strong>
//                </li>
//              </ul>
//            </div>
//
//            <div className={cx('order-details')}>
//              <h1 className={cx('order-details-title')}>Order details</h1>
//              <OrderDetail
//                itemList={productList}
//                orderNumber={shippingInfor.orderNumber}
//                orderDate={shippingInfor.orderDate}
//              />
//            </div>
//          </div>
//        ) : (
//          <CartEmpty />
//        )}
//      </div>
//    </>
//  );
//}
//export default CheckoutDone;
