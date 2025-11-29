import React, { useState } from 'react';
import { Rocket, Users, Calendar, BookOpen, ArrowRight, Menu, X, CheckCircle, Mail, MapPin } from 'lucide-react';

const ClubEmprendimiento = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos de ejemplo basados en tu trabajo real
  const upcomingEvents = [
    {
      id: 1,
      title: "Desarrolla tu MVP en 60 Minutos",
      date: "Próximamente",
      description: "Aprende a validar tu idea sin escribir código. Usaremos Carrd, Google Sheets y Make.",
      tag: "Taller Práctico",
      highlight: true
    },
    {
      id: 2,
      title: "Start-up Camp Sputnik: Debrief",
      date: "10 de Diciembre",
      description: "Sesión de networking y conclusiones tras el evento Sputnik 2025. Compartiremos aprendizajes de los fundadores de Wuolah y Capchase.",
      tag: "Networking",
      highlight: false
    }
  ];

  const resources = [
    {
      title: "Kit de Bienvenida",
      desc: "Todo lo que necesitas para empezar: lecturas Lean Startup y herramientas esenciales.",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Stack No-Code",
      desc: "Guía de herramientas gratuitas para lanzar proyectos sin coste inicial.",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Comunidad",
      desc: "Acceso a nuestro canal de Discord y mentores de la facultad.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <Rocket className="h-8 w-8 text-indigo-600" />
                <span className="font-bold text-xl tracking-tight">Club Emprendimiento <span className="text-indigo-600">US</span></span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-indigo-600 transition">Inicio</a>
              <a href="#actividades" className="text-gray-600 hover:text-indigo-600 transition">Actividades</a>
              <a href="#recursos" className="text-gray-600 hover:text-indigo-600 transition">Recursos</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-md">
                Unirme al Club
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Inicio</a>
              <a href="#actividades" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Actividades</a>
              <a href="#recursos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Recursos</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 font-bold">Unirme ahora</a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div id="inicio" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">No programes nada</span>{' '}
                  <span className="block text-indigo-600 xl:inline">sin validar antes.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Somos la comunidad de estudiantes donde la ingeniería se encuentra con el negocio. Aprende a lanzar proyectos reales, conecta con el ecosistema Startup y transforma tus ideas en MVPs.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Únete Gratis
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#actividades" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Ver Talleres
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-50 flex items-center justify-center">
            {/* Placeholder visual - Abstract representation of connection */}
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-full flex items-center justify-center p-10">
                <div className="grid grid-cols-2 gap-4 opacity-80 transform -rotate-6">
                    <div className="w-32 h-32 bg-indigo-200 rounded-2xl flex items-center justify-center shadow-lg"><Rocket className="w-12 h-12 text-indigo-600"/></div>
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg mt-8"><Users className="w-12 h-12 text-indigo-600"/></div>
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg -mt-8"><Calendar className="w-12 h-12 text-indigo-600"/></div>
                    <div className="w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"><BookOpen className="w-12 h-12 text-white"/></div>
                </div>
            </div>
        </div>
      </div>

      {/* --- STATS / MANTRA --- */}
      <div className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-300 mb-2">Build</div>
              <div className="text-indigo-100">Construye soluciones, no solo código.</div>
            </div>
            <div className="p-4 border-l-0 md:border-l border-indigo-700">
              <div className="text-4xl font-bold text-indigo-300 mb-2">Measure</div>
              <div className="text-indigo-100">Valida con datos reales.</div>
            </div>
            <div className="p-4 border-l-0 md:border-l border-indigo-700">
              <div className="text-4xl font-bold text-indigo-300 mb-2">Learn</div>
              <div className="text-indigo-100">Itera rápido y aprende del mercado.</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ACTIVIDADES --- */}
      <div id="actividades" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Calendario</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Próximas Actividades
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Talleres prácticos diseñados para que salgas con algo construido.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`flex flex-col rounded-lg shadow-lg overflow-hidden border ${event.highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {event.tag}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                      <p className="mt-3 text-base text-gray-500">{event.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Calendar className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {event.date}
                      </p>
                    </div>
                    <div className="ml-auto">
                        <button className="text-indigo-600 hover:text-indigo-900 font-medium text-sm flex items-center">
                            Inscribirme <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- RECURSOS (Kit de Bienvenida) --- */}
      <div id="recursos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Recursos</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tu Kit de Inicio Emprendedor
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Hemos curado las mejores herramientas y lecturas para que no pierdas tiempo buscando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                  Acceder <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA / FOOTER --- */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Listo para lanzar?</span>
            <span className="block text-indigo-600">Únete al club hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Registrarme
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Rocket className="h-6 w-6 text-indigo-400" />
                    <span className="font-bold text-lg text-white">Club Emprendimiento US</span>
                </div>
                <p className="text-sm text-gray-400">
                    Fomentando la cultura emprendedora en la Escuela Técnica Superior de Ingeniería Informática y más allá.
                </p>
            </div>
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Enlaces</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                    <li><a href="#" className="hover:text-white transition">Eventos</a></li>
                    <li><a href="#" className="hover:text-white transition">Recursos</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h3>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@clubemprendimiento.us.es</li>
                    <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> ETSII, Sevilla</li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default ClubEmprendimiento;