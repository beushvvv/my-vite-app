import React from 'react';
import TitleUpdater from "../components/TitleUpdater.jsx";

const About = () => {
  return (
    <div className="about-page min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <TitleUpdater title="О нас | IronGym" />
      
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            О нашем фитнес-клубе
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Основной контент */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-2">
              Наша история
            </h2>
            <p className="text-gray-600 leading-relaxed">
              IronGym был основан в 2010 году группой энтузиастов фитнеса. 
              Начиная с небольшого зала площадью 200 м², мы выросли в сеть 
              современных фитнес-центров по всей стране.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Наша миссия — сделать качественный фитнес доступным для каждого, 
              независимо от возраста и уровня подготовки.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-2">
              Наши принципы
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Индивидуальный подход к каждому клиенту</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Только квалифицированные тренеры</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Современное оборудование</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Дружелюбная атмосфера</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-amber-400 pb-2">
              Наши достижения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">10K+</div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">профессиональных тренеров</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;