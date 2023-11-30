import request from '~/utils/request';

//export const getCategories = async () => {
//  try {
//    const res = await request.get('/categories');
//    const result = res._embedded.categories;
//    const newResult =  result.map(category => ({ title: category.name, ...category }));
//    console.log(newResult);
//    return newResult;
//  } catch (err) {
//  }
//};
export const getCategories = async () => {
  try {
    const res = await request.get('/categories');
    const result = res._embedded.categories;
    const newResult = result.map(category => ({ title: category.name, ...category }));
    console.log('Fetched data:', newResult);
    return newResult;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Nếu không xử lý được lỗi, ném lỗi để báo lên component sử dụng.
  }
};

