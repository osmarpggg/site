import React, { useReducer, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Cpu, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── Types ─────────────────────────────────────────────────────────────────
interface FormAnswers {
    projectName: string;
    name: string;
    contact: string;
    scope: string;
    deadline: string;
    budget: string;
}

type Phase = 'BOOT' | 'QUESTIONS' | 'SENDING' | 'SUCCESS' | 'ERROR';

interface State {
    phase: Phase;
    step: number;
    bootProgress: number;
    answers: FormAnswers;
    error: string | null;
}

type Action =
    | { type: 'BOOT_TICK' }
    | { type: 'START_QUESTIONS' }
    | { type: 'SET_ANSWER'; field: keyof FormAnswers; value: string }
    | { type: 'NEXT_STEP' }
    | { type: 'PREV_STEP' }
    | { type: 'SENDING' }
    | { type: 'SUCCESS' }
    | { type: 'ERROR'; msg: string };

// ─── Questions ─────────────────────────────────────────────────────────────
const QUESTIONS: {
    id: keyof FormAnswers;
    label: string;
    placeholder: string;
    type: 'text' | 'select';
    options?: string[];
}[] = [
        { id: 'projectName', label: '> IDENTIFICANDO MISSÃO: Como você chama seu projeto?', placeholder: 'Ex: AppVentura, SistemaCore...', type: 'text' },
        { id: 'name', label: '> AGENTE CONECTADO: Qual o seu nome?', placeholder: 'Ex: Victor Silva', type: 'text' },
        { id: 'contact', label: '> CANAL DE COMUNICAÇÃO: Email ou WhatsApp para contato?', placeholder: 'email@exemplo.com ou (42) 99999-9999', type: 'text' },
        {
            id: 'scope', label: '> ANALISANDO ESCOPO: O que será desenvolvido?', placeholder: '', type: 'select',
            options: ['Site Institucional', 'Aplicativo Mobile', 'Sistema Web / SaaS', 'Integração com IA', 'E-commerce', 'Consultoria Técnica']
        },
        {
            id: 'deadline', label: '> CALIBRANDO PRAZO: Qual o horizonte de entrega?', placeholder: '', type: 'select',
            options: ['Até 30 dias', 'Até 60 dias', 'Até 90 dias', '3 a 6 meses', 'Flexível']
        },
        {
            id: 'budget', label: '> ALOCANDO RECURSOS: Qual a faixa de investimento?', placeholder: '', type: 'select',
            options: ['Até R$ 3.000', 'R$ 3.000 – R$ 8.000', 'R$ 8.000 – R$ 20.000', 'R$ 20.000 – R$ 50.000', 'Acima de R$ 50.000', 'A definir']
        },
    ];

// ─── Reducer ────────────────────────────────────────────────────────────────
const initialState: State = {
    phase: 'BOOT',
    step: 0,
    bootProgress: 0,
    answers: { projectName: '', name: '', contact: '', scope: '', deadline: '', budget: '' },
    error: null,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'BOOT_TICK': return { ...state, bootProgress: Math.min(state.bootProgress + Math.random() * 18 + 5, 100) };
        case 'START_QUESTIONS': return { ...state, phase: 'QUESTIONS', step: 0 };
        case 'SET_ANSWER': return { ...state, answers: { ...state.answers, [action.field]: action.value } };
        case 'NEXT_STEP': return { ...state, step: Math.min(state.step + 1, QUESTIONS.length - 1) };
        case 'PREV_STEP': return { ...state, step: Math.max(state.step - 1, 0) };
        case 'SENDING': return { ...state, phase: 'SENDING' };
        case 'SUCCESS': return { ...state, phase: 'SUCCESS' };
        case 'ERROR': return { ...state, phase: 'ERROR', error: action.msg };
        default: return state;
    }
}

// ─── Boot screen log lines ──────────────────────────────────────────────────
const BOOT_LOGS = [
    'StalFlow OS v3.7.1 — LOADING...',
    'Initializing core modules...',
    'Connecting to neural mesh...',
    'Scanning deployment environment...',
    'Loading UI engine...',
    'Mounting form system...',
    'READY.',
];

// ─── Props ──────────────────────────────────────────────────────────────────
interface CyberFormProps {
    isOpen: boolean;
    onClose: () => void;
}

// ─── Variants ───────────────────────────────────────────────────────────────
const questionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.25, ease: 'easeIn' } },
};

// ─── Main Component ──────────────────────────────────────────────────────────
const CyberForm: React.FC<CyberFormProps> = ({ isOpen, onClose }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef<HTMLInputElement | HTMLSelectElement | null>(null);
    const bootTimerRef = useRef<NodeJS.Timeout | null>(null);
    const logDisplayCount = Math.min(Math.floor((state.bootProgress / 100) * BOOT_LOGS.length) + 1, BOOT_LOGS.length);

    // Boot progress animation
    useEffect(() => {
        if (!isOpen || state.phase !== 'BOOT') return;
        bootTimerRef.current = setInterval(() => {
            dispatch({ type: 'BOOT_TICK' });
        }, 180);
        return () => { if (bootTimerRef.current) clearInterval(bootTimerRef.current); };
    }, [isOpen, state.phase]);

    // Transition from BOOT to QUESTIONS
    useEffect(() => {
        if (state.phase === 'BOOT' && state.bootProgress >= 100) {
            if (bootTimerRef.current) clearInterval(bootTimerRef.current);
            setTimeout(() => dispatch({ type: 'START_QUESTIONS' }), 600);
        }
    }, [state.bootProgress, state.phase]);

    // Focus input when step changes
    useEffect(() => {
        if (state.phase === 'QUESTIONS') {
            setTimeout(() => inputRef.current?.focus(), 400);
        }
    }, [state.step, state.phase]);

    // Close on ESC
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const currentQuestion = QUESTIONS[state.step];
    const currentValue = state.answers[currentQuestion?.id];
    const isLastStep = state.step === QUESTIONS.length - 1;

    const handleNext = () => {
        if (!currentValue.trim()) return;
        if (isLastStep) {
            handleSubmit();
        } else {
            dispatch({ type: 'NEXT_STEP' });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && currentQuestion?.type === 'text') handleNext();
    };

    const handleSubmit = async () => {
        dispatch({ type: 'SENDING' });
        try {
            await emailjs.send(
                'service_mtvfq97',      // ← your EmailJS service ID
                'template_exfgt85',     // ← your EmailJS template ID
                {
                    to_email: 'juniorpg1904@gmail.com',
                    project_name: state.answers.projectName,
                    client_name: state.answers.name,
                    contact: state.answers.contact,
                    scope: state.answers.scope,
                    deadline: state.answers.deadline,
                    budget: state.answers.budget,
                    submitted_at: new Date().toLocaleString('pt-BR'),
                },
                'NzGkNr17bm6EuVUes' // ← your EmailJS public key
            );
            dispatch({ type: 'SUCCESS' });
        } catch {
            // On fail, fallback to mailto to not block user
            const body = encodeURIComponent(
                `Projeto: ${state.answers.projectName}\nNome: ${state.answers.name}\nContato: ${state.answers.contact}\nEscopo: ${state.answers.scope}\nPrazo: ${state.answers.deadline}\nBudget: ${state.answers.budget}`
            );
            window.open(`mailto:juniorpg1904@gmail.com?subject=Novo Projeto StalFlow — ${state.answers.projectName}&body=${body}`, '_blank');
            dispatch({ type: 'SUCCESS' });
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                        className="relative z-10 w-full max-w-2xl min-h-[520px] rounded-2xl overflow-hidden flex flex-col"
                        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #050510 50%, #0a0a2e 100%)' }}
                    >
                        {/* Animated glow border */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ padding: 1 }}>
                            <div className="absolute inset-0 rounded-2xl animate-[borderGlow_3s_ease-in-out_infinite]" style={{ boxShadow: '0 0 0 1px rgba(139,92,246,0.5), 0 0 30px rgba(139,92,246,0.15)' }} />
                        </div>

                        {/* Scanlines overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.5) 2px,rgba(255,255,255,0.5) 4px)' }} />

                        {/* Header bar */}
                        <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
                            <div className="flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-violet-400 animate-pulse" />
                                <span className="font-mono text-sm text-violet-300 tracking-widest uppercase">StalFlow Cyber-System</span>
                            </div>
                            <button onClick={onClose} className="text-gray-600 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Progress bar (shown during QUESTIONS) */}
                        {state.phase === 'QUESTIONS' && (
                            <div className="relative h-[2px] bg-white/5">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((state.step) / QUESTIONS.length) * 100}%` }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                />
                            </div>
                        )}

                        {/* Content area */}
                        <div className="relative flex-1 flex flex-col justify-center px-8 py-6">

                            {/* ── BOOT PHASE ── */}
                            {state.phase === 'BOOT' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-sm space-y-2">
                                    <div className="text-blue-400 mb-4 text-xs tracking-widest uppercase">// system boot sequence</div>
                                    {BOOT_LOGS.slice(0, logDisplayCount).map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                            className={`flex items-center gap-2 ${i === logDisplayCount - 1 ? 'text-green-400' : 'text-gray-500'}`}
                                        >
                                            <span className="text-violet-600">[{String(i + 1).padStart(2, '0')}]</span>
                                            <span>{log}</span>
                                            {i === logDisplayCount - 1 && <span className="inline-block w-2 h-4 bg-current ml-1 animate-pulse" />}
                                        </motion.div>
                                    ))}
                                    <div className="mt-6">
                                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                            <span>LOADING FORM ENGINE</span>
                                            <span className="text-violet-400">{Math.floor(state.bootProgress)}%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                                                animate={{ width: `${state.bootProgress}%` }}
                                                transition={{ ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* ── QUESTIONS PHASE ── */}
                            {state.phase === 'QUESTIONS' && (
                                <div>
                                    {/* Step counter */}
                                    <div className="flex items-center gap-2 mb-8">
                                        {QUESTIONS.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 rounded-full transition-all duration-500 ${i <= state.step ? 'bg-violet-500' : 'bg-white/10'} ${i === state.step ? 'w-8' : 'w-3'}`}
                                            />
                                        ))}
                                        <span className="ml-auto font-mono text-xs text-gray-600">{state.step + 1} / {QUESTIONS.length}</span>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div key={state.step} variants={questionVariants} initial="hidden" animate="visible" exit="exit">
                                            {/* Label */}
                                            <label className="block font-mono text-violet-300 text-sm mb-6 leading-relaxed">
                                                {currentQuestion.label}
                                            </label>

                                            {/* Input */}
                                            {currentQuestion.type === 'text' ? (
                                                <input
                                                    ref={inputRef as React.RefObject<HTMLInputElement>}
                                                    type="text"
                                                    value={currentValue}
                                                    onChange={e => dispatch({ type: 'SET_ANSWER', field: currentQuestion.id, value: e.target.value })}
                                                    onKeyDown={handleKeyDown}
                                                    placeholder={currentQuestion.placeholder}
                                                    className="w-full bg-transparent border-b-2 border-violet-900 focus:border-violet-500 outline-none py-3 px-1 text-white text-xl font-light placeholder-gray-700 transition-colors duration-300"
                                                />
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {currentQuestion.options?.map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => {
                                                                dispatch({ type: 'SET_ANSWER', field: currentQuestion.id, value: opt });
                                                            }}
                                                            className={`text-left px-4 py-3 rounded-xl border text-sm font-mono transition-all duration-200 ${currentValue === opt
                                                                ? 'border-violet-500 bg-violet-500/20 text-violet-200'
                                                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-violet-700 hover:text-white'
                                                                }`}
                                                        >
                                                            {currentValue === opt && <span className="text-violet-400 mr-2">▶</span>}{opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation */}
                                    <div className="flex items-center justify-between mt-10">
                                        <button
                                            onClick={() => dispatch({ type: 'PREV_STEP' })}
                                            disabled={state.step === 0}
                                            className="text-gray-600 hover:text-gray-300 text-sm font-mono disabled:opacity-0 transition-all"
                                        >
                                            ← voltar
                                        </button>
                                        <motion.button
                                            onClick={handleNext}
                                            disabled={!currentValue.trim()}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-mono text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-opacity shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                                        >
                                            {isLastStep ? <><Send className="w-4 h-4" /> Enviar Missão</> : <>Confirmar <ChevronRight className="w-4 h-4" /></>}
                                        </motion.button>
                                    </div>
                                </div>
                            )}

                            {/* ── SENDING PHASE ── */}
                            {state.phase === 'SENDING' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center gap-6 py-8">
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 rounded-full border-4 border-violet-900" />
                                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 animate-spin" />
                                    </div>
                                    <div className="font-mono text-center">
                                        <p className="text-violet-300 text-sm animate-pulse">TRANSMITINDO DADOS...</p>
                                        <p className="text-gray-600 text-xs mt-1">Enviando para base de operações</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* ── SUCCESS PHASE ── */}
                            {state.phase === 'SUCCESS' && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }} className="flex flex-col items-center justify-center gap-6 py-8 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                                        transition={{ type: 'spring', delay: 0.2 }}
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-400" />
                                    </motion.div>
                                    <div className="font-mono">
                                        <p className="text-2xl text-green-300 font-bold tracking-widest">SISTEMA INICIALIZADO</p>
                                        <p className="text-gray-400 text-sm mt-2">Missão registrada com sucesso, <span className="text-violet-300">{state.answers.name}</span>.</p>
                                        <p className="text-gray-600 text-xs mt-1">Nossa equipe entrará em contato via <span className="text-blue-400">{state.answers.contact}</span></p>
                                    </div>
                                    <button onClick={onClose} className="mt-2 px-6 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 font-mono text-sm transition-colors">
                                        fechar terminal
                                    </button>
                                </motion.div>
                            )}

                            {/* ── ERROR PHASE ── */}
                            {state.phase === 'ERROR' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 py-8 text-center">
                                    <p className="text-red-400 font-mono text-sm">FALHA NA TRANSMISSÃO</p>
                                    <p className="text-gray-600 text-xs">{state.error}</p>
                                    <button onClick={() => dispatch({ type: 'SENDING' })} className="px-4 py-2 rounded-lg bg-red-900/30 border border-red-800 text-red-400 font-mono text-xs">
                                        RETRY
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-3 border-t border-white/[0.05] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="font-mono text-xs text-gray-700">stalflow.sys // secure channel // AES-256</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CyberForm;
