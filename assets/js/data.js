// ============================================================
// data.js — ARCHIVO DE ADMINISTRACIÓN
// Edita este archivo para agregar o modificar habitaciones y servicios
// ============================================================

const HOSTAL = {
  name: "Hostal Encantos",
  tagline: "Donde cada estadía se convierte en un recuerdo inolvidable",
  phone: "+51 052 280 653",
  whatsapp: "+51952660900",
  facebook: "https://www.facebook.com/encantoshostal",
  address: "Asoc. Viv. E. Pérez Gamboa Mz.A Lt.18, Tacna, Perú",
  googleMaps: "https://maps.app.goo.gl/qeDT3P8oUqwN9KbY6",
  email: "contacto@hostalencantos.pe"
};

// ============================================================
// HABITACIONES — Agrega o modifica aquí
// ============================================================
const ROOMS = [
  {
    id: 1,
    name: "Habitación Simple",
    price: 50,
    description: "Disfruta de una estancia cómoda y tranquila en una habitación diseñada para tu descanso. Ideal para parejas o viajeros que buscan confort, privacidad y atención de calidad.",
    highlight: "Perfecta para parejas 💕",
    capacity: 2,
    bed: "1 cama de 2 plazas",
    availability: "¡Últimas disponibles!",
    amenities: [
      "Cama de 2 plazas",
      "TV 32'' LED",
      "WiFi gratuito",
      "Baño privado",
      "Agua caliente 24h (terma solar)",
      "Room Service",
      "Atención 24 horas"
    ],
    badge: "Más reservada",
    image: "./assets/images/Habitaciones/img1.jpg"
  },
  {
    id: 2,
    name: "Habitación Doble",
    price: 80,
    description: "Espaciosa y confortable habitación ideal para compartir, equipada con finos acabados, iluminación cálida y un ambiente perfecto para descansar luego de un día de viaje o trabajo.",
    highlight: "Ideal para amigos o familia 👨‍👩‍👧‍👦",
    capacity: 3,
    bed: "1 cama de 2 plazas + 1 cama de 1.5 plazas",
    availability: "Alta demanda",
    amenities: [
      "2 camas (2 plazas + 1.5 plazas)",
      "TV 32'' LED Netflix",
      "WiFi gratuito",
      "Baño privado",
      "Agua caliente 24h (terma solar)",
      "Room Service",
      "Atención 24 horas"
    ],
    badge: "Recomendada",
    image: "./assets/images/Habitaciones/img2.jpg"
  },
  {
    id: 3,
    name: "Habitación Matrimonial",
    price: 120,
    description: "Disfruta de una estancia cómoda y acogedora en un ambiente elegante, ideal para parejas que buscan privacidad, descanso y una experiencia agradable en cada detalle.",
    highlight: "Perfecta para parejas 💕",
    capacity: 2,
    bed: "1 cama de 2 plazas",
    availability: "¡Últimas disponibles!",
    amenities: [
      "Cama de 2 plazas",
      "TV 32'' LED Netflix",
      "WiFi gratuito",
      "Baño privado",
      "Agua caliente 24h (terma solar)",
      "Room Service",
      "Atención 24 horas"
    ],
    badge: "Más reservada",
    image: "./assets/images/Habitaciones/img3.jpg"
  },
  {
    id: 4,
    name: "Habitación Matrimonial con Jacuzzi",
    price: 180,
    description: "Vive una experiencia única de relajación en una habitación exclusiva con jacuzzi privado, perfecta para escapadas románticas o momentos especiales.",
    highlight: "Experiencia romántica 💖",
    capacity: 2,
    bed: "1 cama de 2 plazas",
    availability: "Exclusiva",
    amenities: [
      "Cama de 2 plazas",
      "Jacuzzi privado",
      "TV 32'' LED Netflix",
      "WiFi gratuito",
      "Baño privado",
      "Agua caliente 24h (terma solar)",
      "Room Service",
      "Atención 24 horas"
    ],
    badge: "Premium",
    image: "./assets/images/Habitaciones/img4.jpg"
  }
];

// ============================================================
// SERVICIOS — Agrega o modifica aquí
// ============================================================
const SERVICES = [
  { id: 1, icon: "wifi",            name: "WiFi de Alta Velocidad",  description: "Conexión ilimitada en todas las áreas del hostal para que siempre estés conectado." },
  { id: 2, icon: "coffee",          name: "Desayuno Incluido",        description: "Disfruta de un desayuno completo y nutritivo cada mañana en nuestro comedor." },
  { id: 3, icon: "shield-check",    name: "Seguridad 24/7",           description: "Sistema de vigilancia y personal de seguridad las 24 horas del día." },
  { id: 4, icon: "car",             name: "Estacionamiento",          description: "Estacionamiento seguro y gratuito para huéspedes con vehículo propio." },
  { id: 5, icon: "washing-machine", name: "Lavandería",               description: "Servicio de lavado y planchado disponible para tu comodidad." },
  { id: 6, icon: "map-pin",         name: "Ubicación Perfecta",       description: "A pasos de los principales atractivos turísticos y restaurantes de la ciudad." }
];

// ============================================================
// GALERÍA — Agrega o modifica aquí
// ============================================================
const GALLERY = [
  { src: "./assets/images/Galeria/img0.jpg", alt: "Infraestructura del hostal", span: "normal" },
  { src: "./assets/images/Galeria/img1.jpg", alt: "Recepción del hostal", span: "wide" },
  { src: "./assets/images/Galeria/img2.jpg", alt: "Habitación matrimonial", span: "normal" },
  { src: "./assets/images/Galeria/img3.jpg", alt: "Habitación doble", span: "normal" },
  { src: "./assets/images/Galeria/img4.jpg", alt: "Habitación con jacuzzi", span: "wide" },
  { src: "./assets/images/Galeria/img5.jpg", alt: "Baño privado moderno", span: "normal" },
  { src: "./assets/images/Galeria/img6.jpg", alt: "Zona de descanso", span: "normal" },
  { src: "./assets/images/Galeria/img7.jpg", alt: "Pasillos del hostal", span: "normal" },
  { src: "./assets/images/Galeria/img8.jpg", alt: "Detalle de cama confortable", span: "wide" },
  { src: "./assets/images/Galeria/img9.jpg", alt: "Servicio de habitación", span: "normal" },
  { src: "./assets/images/Galeria/img10.jpg", alt: "Vista interior del hostal", span: "normal" },
  { src: "./assets/images/Galeria/img11.jpg", alt: "Ambiente nocturno acogedor", span: "wide" }
];

// ============================================================
// CARRUSEL HERO — Slides principales
// ============================================================
const CAROUSEL_SLIDES = [
  {
    image: "./assets/images/Carrucel/img1.jpg",
    title: "Bienvenido a Hostal Encantos",
    subtitle: "Tu hogar lejos de casa en el corazón de Tacna"
  },
  {
    image: "./assets/images/Carrucel/img2.jpg",
    title: "Confort y Elegancia",
    subtitle: "Habitaciones diseñadas para tu descanso perfecto"
  },
  {
    image: "./assets/images/Carrucel/img3.jpg",
    title: "Experiencia Única",
    subtitle: "Servicios premium al alcance de todos"
  },
  {
    image: "./assets/images/Carrucel/img4.jpg",
    title: "Ubicación Privilegiada",
    subtitle: "A pasos de los principales atractivos de Tacna"
  },
  {
    image: "./assets/images/Carrucel/img5.jpg",
    title: "Atención Personalizada",
    subtitle: "Nos preocupamos por cada detalle de tu estadía"
  }
];