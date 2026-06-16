"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Users2 } from "lucide-react";

const team = [
  {
    name: "Selvin Prabhakar",
    role: "Chief Executive Officer",
    image: "/team/selvin-prabhakar.jpeg",
    bio: "Driving our vision to democratize credit access across India with innovative technology.",
    gradient: "from-brand-400 to-brand-600",
    objectPos: "object-top"
  },
  {
    name: "Arpita Bhowmik",
    role: "Non-Executive Director",
    image: "/team/arpita-bhowmik.jpeg",
    bio: "Bringing decades of governance and strategic financial expertise to our board.",
    gradient: "from-accent-gold to-amber-500",
    objectPos: "object-top"
  },
  {
    name: "Prabin Mishra",
    role: "Chief Operating & Technology Officer",
    image: "/team/prabin-mishra.jpeg",
    bio: "Spearheading our operations and technical infrastructure to ensure seamless experiences.",
    gradient: "from-accent-green to-emerald-600",
    objectPos: "object-[center_20%]"
  }
];

function TeamCard({
  member,
  index
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-card sm:p-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow ring behind avatar */}
      <div className="relative mx-auto mb-6 h-36 w-36">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl`}
        />
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} p-[3px]`}
        >
          <div className="h-full w-full overflow-hidden rounded-full bg-white p-1">
            <Image
              src={member.image}
              alt={member.name}
              width={140}
              height={140}
              className={`h-full w-full rounded-full object-cover ${member.objectPos} transition-transform duration-500 group-hover:scale-110`}
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-center text-xl font-bold text-brand-600">
        {member.name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-center text-xs font-bold uppercase tracking-widest text-accent-gold-dark">
        {member.role}
      </p>

      {/* Bio */}
      <p className="mt-4 text-center text-sm leading-relaxed text-slate-600">
        {member.bio}
      </p>

      {/* Hover bottom accent line */}
      <div
        className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${member.gradient} transition-all duration-500 group-hover:w-1/2`}
      />
    </div>
  );
}

export default function Leadership() {
  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Users2 size={28} />
          </div>
          <h2 className="mt-5 text-[1.6rem] font-extrabold tracking-tight xs:text-3xl sm:text-4xl">
            <span className="text-brand-600">Meet Our</span>{" "}
            <span className="bg-gradient-to-r from-accent-gold to-amber-500 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            The visionary minds dedicated to revolutionizing the lending
            ecosystem in India.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
