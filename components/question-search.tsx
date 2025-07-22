"use client";

import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";

// Import der Fragen-Daten
import questionsData from "../hooks/fragen.json";

interface Question {
  id: number;
  module: string;
  topic: string;
  question: string;
  antwort: string;
}

interface SearchResult {
  question: string;
  answer: string;
  score: number;
  module: string;
  topic: string;
}

export function useQuestionSearch() {
  // Fuse.js Konfiguration für intelligente Suche
  const fuse = useMemo(() => {
    const options = {
      keys: ["question"], // Suche nur in der deutschen Frage
      threshold: 0.4, // 0.4 bedeutet 60% Übereinstimmung erforderlich - gut für Tippfehler
      distance: 100, // Maximale Distanz für Fuzzy-Matching
      minMatchCharLength: 2, // Mindestens 2 Zeichen müssen übereinstimmen
      ignoreLocation: true, // Position im Text ignorieren
      includeScore: true, // Score für Ranking includieren
    };

    return new Fuse(questionsData as Question[], options);
  }, []);

  const searchQuestions = (query: string): SearchResult[] => {
    if (!query.trim()) {
      return [];
    }

    const results = fuse.search(query);

    return results
      .map((result) => ({
        question: result.item.question,
        answer: result.item.antwort,
        score: result.score || 0,
        module: result.item.module,
        topic: result.item.topic,
      }))
      .slice(0, 5); // Nur die besten 5 Ergebnisse
  };

  return { searchQuestions };
}
