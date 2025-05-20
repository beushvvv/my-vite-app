function Contacts() {
    return (
      <div className="contacts-page">
        <section className="contacts-hero">
          <h1>Контакты</h1>
        </section>
        
        <section className="contacts-content">
          <div className="container">
            <div className="contacts-grid">
              <div className="contact-form">
                <h2>Напишите нам</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" placeholder="Ваше имя" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Ваш email" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" rows="5" placeholder="Ваше сообщение"></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Отправить</button>
                </form>
              </div>
              
              <div className="contact-info">
                <h2>Контактная информация</h2>
                
                <div className="info-item">
                  <h3>Адрес главного офиса</h3>
                  <p>г. Москва, ул. Спортивная, 10</p>
                </div>
                
                <div className="info-item">
                  <h3>Телефон</h3>
                  <p>+7 (800) 555-35-35</p>
                </div>
                
                <div className="info-item">
                  <h3>Email</h3>
                  <p>info@irongym.ru</p>
                </div>
                
                <div className="info-item">
                  <h3>Часы работы</h3>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Contacts