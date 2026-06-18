import React from "react";
import { events } from "../mock";
import { Calendar, MapPin, MessageCircle } from "lucide-react";

const tagStyles = {
  blue: "bg-[#2e8bc0] text-white",
  teal: "bg-[#2a8273] text-white",
  orange: "bg-[#e79a3b] text-white",
};

const EventCard = ({ event, featured = false }) => {
  return (
    <div className="relative">
      <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(20,58,85,0.06)] hover:shadow-[0_10px_35px_rgba(20,58,85,0.15)] transition-all duration-300 hover:-translate-y-1 group ${featured ? "md:grid md:grid-cols-2" : ""}`}>

        {event.registrationOpen && (
          <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
            Registration Open
          </div>
        )}

        <div className={`relative overflow-hidden bg-[#eaf4fb] ${featured ? "h-[260px] md:h-full md:min-h-[340px]" : "h-[220px]"}`}>
          <img
            src={event.image}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-2 text-[#6b8294] text-sm mb-2">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <h3 className={`text-[#143a55] font-semibold leading-snug mb-3 group-hover:text-[#2e8bc0] transition-colors ${featured ? "text-[22px] md:text-[26px]" : "text-[20px] min-h-[60px]"}`}>
            {event.title}
          </h3>
          {event.description && featured && (
            <p className="text-[#385365] text-[14.5px] leading-relaxed mb-4 line-clamp-4">
              {event.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mb-5">
            {event.tags.map((t, i) => (
              <span key={`${t.code}-${i}`} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium ${tagStyles[t.color]}`}>
                {t.label}
                <span className="opacity-80 text-[11px] font-semibold">{t.code}</span>
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-[#e6edf2] flex items-center gap-3">
            <img src={event.flag} alt={event.country} className="w-7 h-5 object-cover rounded-sm shadow-sm" />
            <span className="text-[#143a55] text-[15px] font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#2e8bc0]" />
              {event.location}
            </span>
          </div>

          {event.whatsappLink && (
            <a
              href={event.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Register on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const [featured, ...rest] = events;
  return (
    <section id="events" className="bg-[#f2f8fc] py-20">
      <div className="relative mb-12">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#cfe4f2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-[#f2f8fc] pr-8">
            Upcoming events
          </h2>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 space-y-7">
        {featured && <EventCard event={featured} featured />}
        <div className="grid md:grid-cols-2 gap-7">
          {rest.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
