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
                <h2 className="text-2xl font-bold mb-6 text-center">Напишите нам</h2>
                <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Ваш email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Ваше сообщение"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                  >
                    Отправить
                  </button>
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