import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Animation = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

const particlesLoaded = useCallback(async (container) => {
    console.log(container);
}, []);

const particlesOptions = {
    
    autoPlay: true,
    background: {
        color: {
            value: "",
        },
    },
    fullScreen: {
        enable: false,
        zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    particles: {
        number: {
            value: 355,
            density: {
                enable: true,
                value_area: 789.1476416322727,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "attract",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            attract: {
                distance: 200,
                speed: 0.5,
            },
            bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    themes: [],
};

return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
    />
);
};

export default Animation;
