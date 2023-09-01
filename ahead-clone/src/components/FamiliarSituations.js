"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import EmotionCard from './EmotionCard';

const FamiliarSituations = () => {
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const titleRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      };
  
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.style.visibility = 'visible';
            titleRef.current.classList.add('animate-slide-left'); 
            cardsContainerRef.current.style.visibility = 'visible';
            cardsContainerRef.current.classList.add('animate-slide-right'); 
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
      observer.observe(sectionRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-xl mt-12 p-8"
      >
        <h2
          ref={titleRef}
          className="text-2xl md:text-3xl font-bold text-3xl md:text-4xl mb-4"
          style={{ visibility: 'hidden' }}
        >
          Does this sound familiar...   🤔
        </h2>
        <motion.div
          ref={cardsContainerRef}
          className="flex pb-4 overflow-x-auto py-6 hide-scrollbar" 
          style={{ visibility: 'hidden', width: '100%', maxWidth: '100vw' }} 
        >
          <div className="flex space-x-8" style={{ minWidth: '120vw' }}> 
          <EmotionCard
          emoji="😠"
          phrase="You argue with a colleague"
          description="You get angry and defensive, instead of staying open and working towards common ground."
          color="bg-sky-500/20"
        />
        <EmotionCard
          emoji="😳"
          phrase="You get a promotion at work"
          description="You question yourself and realise when they'll realise you're an unqualified imposter, instead of trusting yourself and your abilities. "
          color="bg-green-500/20"
        />
        <EmotionCard
          emoji="😕"
          phrase="You attend a class reunion"
          description="You compare yourselves with your peers' achievements instead of making your self-judgement more independent than others."
          color="bg-yellow-500/20"
        />
        <EmotionCard
          emoji="😒"
          phrase="You are at a lively dinner party"
          description="You play on your phone instead of confidently approaching strangers and striking up a chat."
          color="bg-purple-500/20"
        />
        <EmotionCard
          emoji="😬"
          phrase="You hit dead end in a negotiation"
          description="You get nervous, frazzled and frustrated instead of staying optimistic and solution oriented."
          color="bg-red-500/20"
        />
          </div>
        </motion.div>
      </motion.div>
    );
  };
  
  export default FamiliarSituations;