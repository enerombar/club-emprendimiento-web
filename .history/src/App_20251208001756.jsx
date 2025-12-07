import React, { useState } from 'react';
import { Rocket, Users, Calendar, BookOpen, ArrowRight, Menu, X, CheckCircle, Mail, MapPin, Clock, Info } from 'lucide-react';

const ClubEmprendimiento = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Estado para el evento seleccionado (modal)

  // Datos de ejemplo basados en tu trabajo real, ahora con MÁS detalles
  const upcomingEvents = [
    {
      id: 1,
      title: "Desarrolla tu MVP en 60 Minutos",
      date: "Próximamente",
      time: "16:00 - 18:00",
      location: "Aula H1.10, ETSII",
      description: "Aprende a validar tu idea sin escribir código. Usaremos Carrd, Google Sheets y Make.",
      fullDescription: "En este taller práctico intensivo, romperemos el mito de que necesitas meses de programación para lanzar una idea. Aprenderás a construir un flujo de validación completo usando herramientas No-Code. Saldrás del taller con una Landing Page funcional conectada a una base de datos y un sistema de email automático.",
      agenda: [
        "Introducción: La trampa de la sobre-ingeniería",
        "Herramientas: Carrd, Airtable y Make",
        "Live Demo: Construyendo en tiempo real",
        "Estrategias de validación rápida"
      ],
      tag: "Taller Práctico",
      highlight: true
    },
    {
      id: 2,
      title: "Start-up Camp Sputnik: Debrief",
      date: "10 de Diciembre",
      time: "17:30 - 19:00",
      location: "Sala de Juntas, ETSII",
      description: "Sesión de networking y conclusiones tras el evento Sputnik 2025. Compartiremos aprendizajes de los fundadores de Wuolah y Capchase.",
      fullDescription: "Una sesión exclusiva para compartir los 'insights' más potentes extraídos del Start-up Camp de Sputnik. Analizaremos las claves de crecimiento de startups sevillanas como Wuolah y debatiremos sobre las oportunidades actuales en el ecosistema emprendedor.",
      agenda: [
        "Resumen del evento Sputnik 2025",
        "Lecciones aprendidas de Wuolah y Capchase",
        "Networking con pizza y refrescos",
        "Presentación de nuevos proyectos del club"
      ],
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

  // Función para abrir el modal
  const openModal = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

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
              <a href="#sobre-nosotros" className="text-gray-600 hover:text-indigo-600 transition">Sobre nosotros</a>
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
                  <span className="block xl:inline">Desarrolla tu </span>{' '}
                  <span className="block text-indigo-600 xl:inline">iniciativa emprendedora.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Somos una comunidad de estudiantes de la Universidad de Sevilla unidos por las ideas y el emprendimiento. Aprende a lanzar, asentar y destacar tu proyecto con nosotros a través de nuestras charlas, talleres y más.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Únete al Club
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#actividades" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Ver Actividades
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
              <div className="text-4xl font-bold text-indigo-300 mb-2">Aprende</div>
              <div className="text-indigo-100">Fórmate en nuestros talleres.</div>
            </div>
            <div className="p-4 border-l-0 md:border-l border-indigo-700">
              <div className="text-4xl font-bold text-indigo-300 mb-2">Crea</div>
              <div className="text-indigo-100">inicia tu idea de emprendimiento.</div>
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
              // Añadido onClick para abrir el modal
              <div 
                key={event.id} 
                onClick={() => openModal(event)}
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden border cursor-pointer transition-transform hover:scale-105 ${event.highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}
              >
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
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-indigo-600 font-medium text-sm">
                        Ver Detalles <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL DE DETALLES DEL EVENTO --- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Overlay de fondo oscuro */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            {/* Centrado vertical del modal */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Contenido del Modal */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    {/* Header del Modal con Título y Tag */}
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                                {selectedEvent.tag}
                            </span>
                            <h3 className="text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                                {selectedEvent.title}
                            </h3>
                        </div>
                        <button 
                            onClick={closeModal}
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    
                    {/* Información Clave (Fecha, Hora, Lugar) */}
                    <div className="mt-4 bg-gray-50 rounded-lg p-4 grid grid-cols-1 gap-3">
                        <div className="flex items-center text-gray-700">
                            <Calendar className="h-5 w-5 mr-3 text-indigo-600" />
                            <span className="font-medium">{selectedEvent.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Clock className="h-5 w-5 mr-3 text-indigo-600" />
                            <span className="font-medium">{selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <MapPin className="h-5 w-5 mr-3 text-indigo-600" />
                            <span className="font-medium">{selectedEvent.location}</span>
                        </div>
                    </div>

                    {/* Descripción Completa */}
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-900 mb-2">Sobre este evento</h4>
                      <p className="text-sm text-gray-600">
                        {selectedEvent.fullDescription}
                      </p>
                    </div>

                    {/* Agenda */}
                    {selectedEvent.agenda && (
                        <div className="mt-4">
                            <h4 className="font-bold text-gray-900 mb-2">Agenda</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {selectedEvent.agenda.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                  Inscribirme Ahora
                </button>
                <button 
                    type="button" 
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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