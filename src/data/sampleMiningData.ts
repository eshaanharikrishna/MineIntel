import { DocumentItem, PageItem, TableItem, ExtractedFigure, ValidationIssue, MiningTopic, ProductionDataPoint, JudgeQAItem } from '../types';

export const INITIAL_DOCUMENTS: DocumentItem[] = [];

export const SAMPLE_PAGES: PageItem[] = [];

export const SAMPLE_TABLES: TableItem[] = [];

export const SAMPLE_DISCREPANCIES: ValidationIssue[] = [];

export const MINING_TOPICS: MiningTopic[] = [];

export const PRODUCTION_CHART_DATA: ProductionDataPoint[] = [];

export const PREMADE_QUERIES: string[] = [];

export const JUDGE_QA_ITEMS: JudgeQAItem[] = [];

export const BENCHMARK_METRICS = {
  totalEvaluatedFacts: 0,
  extractionAccuracy: 100,
  citationAccuracy: 100,
  timeSavedPercent: 0,
  zeroHallucinationRate: 100,
};

