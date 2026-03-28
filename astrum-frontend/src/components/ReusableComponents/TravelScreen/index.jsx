import "./styles.css";
import saturnIcon from "../../../assets/icons/saturnoicon 1.svg";
import { useState, useEffect } from "react";

const QUOTES = [
    { text: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.", author: "Carl Sagan" },
    { text: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.", author: "Stephen Hawking" },
    { text: "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars.", author: "Carl Sagan" },
    { text: "Not only is the universe stranger than we think, it is stranger than we can think.", author: "Werner Heisenberg" },
    { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Hubble" },
    { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson" },
    { text: "To confine our attention to terrestrial matters would be to limit the human spirit.", author: "Stephen Hawking" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
];

export default function TravelScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % QUOTES.length);
                setVisible(true);
            }, 500);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const quote = QUOTES[currentIndex];

    return (
        <div className="travel-screen">
            <img src={saturnIcon} alt="Saturn icon" className="travel-icon" />
            <div
                className="travel-quote-wrapper"
                style={{ opacity: visible ? 1 : 0, transition: "opacity ease 0.5s" }}
            >
                <p className="travel-quote">"{quote.text}"</p>
                <span className="travel-author">– {quote.author}</span>
            </div>
            <div className="travel-text">
                <span>traveling</span>
                <span className="dot dot-1">•</span>
                <span className="dot dot-2">•</span>
                <span className="dot dot-3">•</span>
            </div>
        </div>
    );
}
