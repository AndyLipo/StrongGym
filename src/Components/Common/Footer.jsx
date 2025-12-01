import { FacebookIcon } from "./Icons/FacebookIcon";
import { InstagramIcon } from "./Icons/InstagramIcon";

export const Footer = () => {
    return (
        <footer className='bg-black py-6 sm:py-8 rounded-t-3xl mt-12 md:mt-16'>
            <div className="flex flex-col items-center gap-4">
                {/* Iconos sociales */}
                <section className="flex items-center gap-4 sm:gap-6">
                    <a
                        href="https://facebook.com/tugimnasio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <FacebookIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-blue-500 transition-colors" />
                    </a>
                    <a
                        href="https://www.instagram.com/strongtraining.arg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white hover:text-pink-500 transition-colors" />
                    </a>
                </section>

                {/* Copyright */}
                <p className='text-white text-xs sm:text-sm md:text-base text-center'>
                    © 2025 Strong Training. Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
};