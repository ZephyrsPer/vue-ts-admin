// mock.js
import Mock from 'mockjs';

Mock.mock('/api/users', 'get', {
    'id': 1,
    'name': '张',
    'age': 30,
    'gender': '男',
    'email': 'john@example.com'
});


console.log('Mock.js configuration loaded');
