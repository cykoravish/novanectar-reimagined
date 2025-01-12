import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import graphicDesignIcon from "@/assets/services/graphicDesignIcon.png";
import graphicDesign from "@/assets/services/graphicDesign.png";
import mobileDevIcon from "@/assets/services/mobileDevIcon.png";
import mobileDev from "@/assets/services/mobileDev.png";
import webDev from "@/assets/services/webDev.png";
import webDevIcon from "@/assets/services/webDevIcon.png";
import eComm from "@/assets/services/eComm.png";
import eCommLogo from "@/assets/services/eCommLogo.png";
import digitalMarkLogo from "@/assets/services/digitalMarkLogo.png";
import digitalMarketing from "@/assets/services/digitalMarketing.png";
import seoLogo from "@/assets/services/seoLogo.png";
import seo from "@/assets/services/seo.png";


interface ServiceCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
  image: StaticImageData;
}

const ServiceCard = ({ title, description, icon, image }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden group p-6 hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex items-center justify-center w-32 h-20 mx-auto mb-6">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={200}
          height={200}
          className="transition-transform duration-300 group-hover:scale-110 border-8 border-blue-300 rounded-full"
        />
      </div>

      <motion.h3
        className="mb-4 text-xl font-bold text-center text-gray-800"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      <p className="text-center text-gray-600 text-xl">{description}</p>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 bg-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Graphic Design",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: graphicDesignIcon,
      image: graphicDesign,
    },
    {
      title: "Mobile Development",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: mobileDevIcon,
      image: mobileDev,
    },
    {
      title: "Website Development",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: webDevIcon,
      image: webDev,
    },
    {
      title: "Ecommerce",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: eComm,
      image: eCommLogo,
    },
    {
      title: "SEO",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: seoLogo,
      image: seo,
    },
    {
      title: "Digital Marketing",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
      icon: digitalMarkLogo,
      image: digitalMarketing,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
