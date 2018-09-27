import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [{
      id: 123,
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      id: 456,
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/todoList').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
