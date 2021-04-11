export interface QuestionModel{
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
    options: string[];
    optionSelected: string;
}