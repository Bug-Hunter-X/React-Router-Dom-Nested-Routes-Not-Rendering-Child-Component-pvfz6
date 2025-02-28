```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

function ContactDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact Details {id}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=':id' element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App; 
```