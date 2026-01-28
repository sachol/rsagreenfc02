
import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Sparkles, ThumbsUp, RotateCcw, PlusCircle, Soup, AlertCircle } from 'lucide-react';

interface ResultViewProps {
  item: MenuItem;
  reason?: string;
  onReset: () => void;
  onAddToOrder: () => void;
  isAiRecommended: boolean;
}

export const ResultView: React.FC<ResultViewProps> = ({ item, reason, onReset, onAddToOrder, isAiRecommended }) => {
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-500">
      <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 w-full max-w-md flex flex-col items-center relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className={`absolute top-0 left-0 w-full h-40 ${item.color} opacity-10 -z-10`} />
        <div className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/0 to-white -z-10`} />
        
        {/* Header Badge */}
        <div className={`
          px-5 py-2 rounded-full text-xs font-black mb-8 flex items-center gap-2 shadow-sm
          ${isAiRecommended ? 'bg-purple-600 text-white' : 'bg-green-600 text-white'}
        `}>
          {isAiRecommended ? (
            <>
              <Sparkles className="w-4 h-4 fill-current" />
              AI 코치 강력 추천
            </>
          ) : (
            <>
              <ThumbsUp className="w-4 h-4 fill-current" />
              오늘의 베스트 초이스
            </>
          )}
        </div>

        {/* Main Image Illustration */}
        <div className={`w-64 h-64 mb-8 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white animate-bounce-slow relative flex items-center justify-center ${item.color}`}>
            {/* Shimmer/Placeholder while loading */}
            {imgStatus === 'loading' && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <Soup size={64} className="text-gray-300 animate-bounce" />
              </div>
            )}
            
            {/* Fallback Icon on Error */}
            {imgStatus === 'error' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-6 text-center">
                <AlertCircle size={48} className="mb-2 opacity-50" />
                <span className="text-xs font-black uppercase tracking-widest leading-tight">Image Load Failed</span>
              </div>
            )}

            <img 
                src={item.image} 
                alt={item.name}
                className={`w-full h-full object-cover relative z-10 transition-opacity duration-500 ${imgStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgStatus('loaded')}
                onError={() => setImgStatus('error')}
            />
            
            {/* Overlay Gradient for consistency */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none" />
        </div>
        
        <h2 className="text-4xl font-black text-gray-900 mb-2 text-center tracking-tight">
          {item.name}
        </h2>
        
        {/* Tags */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {item.tags.map(tag => (
                <span key={tag} className={`text-xs font-bold ${item.color.replace('bg-', 'text-')} bg-gray-50 px-3 py-1 rounded-full border border-gray-100`}>
                  #{tag}
                </span>
            ))}
        </div>

        {/* Reason Box */}
        <div className="bg-gray-50 rounded-3xl p-6 w-full mb-10 text-center border border-gray-100 shadow-inner relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-black text-gray-300 uppercase tracking-widest">Message</span>
          <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed italic">
            "{reason || '운동 후 최고의 영양 보충이 될 것입니다!'}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 w-full">
          <button
            onClick={() => {
              onAddToOrder();
              onReset();
            }}
            className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-[2rem] transition-all shadow-xl shadow-green-200 active:scale-95 text-lg"
          >
            <PlusCircle className="w-6 h-6" />
            주문 목록에 담기
          </button>
          
          <button
            onClick={onReset}
            className="flex-none flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 font-bold px-7 rounded-[2rem] transition-all active:scale-95 shadow-sm"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
