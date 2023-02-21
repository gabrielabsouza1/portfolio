import React, { createContext, useContext } from 'react'

const ApiContext = createContext();

export default function ContextApiAnimation({ children }) {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: -30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            },
        },
    };

    const fadeDown = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            },
        },
    };
    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };
    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };
    const fade = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            },
        },
    };
    return (
        <ApiContext.Provider
            value={{
                fade,
                fadeDown,
                fadeUp,
                variants,
                fadeRight,
                fadeLeft
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useAnimationContext() {
    const context = useContext(ApiContext);
    const { fade,
        fadeDown,
        fadeUp,
        variants,
        fadeRight,
        fadeLeft
    } = context;
    return {
        fade,
        fadeDown,
        fadeUp,
        variants,
        fadeRight,
        fadeLeft
    };
}