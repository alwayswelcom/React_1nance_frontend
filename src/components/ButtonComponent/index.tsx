import React from "react";
import { DownloadIcon } from "@heroicons/react/solid"
import { useState, useRef, useEffect } from "react";
import ReactPlayer from 'react-player';
import FadeLoader from 'react-spinners/FadeLoader';

interface CommonButtonProps {
  title: string,
  isSmall?: boolean,
  icon?: any,
  handler: any,
  className?: string,
}

export const CommonButton: React.FC<CommonButtonProps> = ({ title, isSmall = false, icon = null, handler, className = "" }) => {
  return (
    <div onClick={() => handler()} className={`flex justify-center gap-2 cursor-pointer items-center bg-gradient-to-r from-[#FFAF10] via-[#F97919] to-[#FFAF10] bg-[length:200%_100%] hover:bg-[center_right_1rem] hover:scale-[1.02] active:scale-[0.98] transition-all duration-700 ease-out rounded-[12px] px-8 py-3 text-[18px] text-[#03185B] text-center font-bold leading-[21px] drop-shadow-[0_5px_6px_rgba(0,0,0,0.5)] ${!isSmall ? "min-w-[200px] max-w-[240px]" : ""} ${className}`}>
      {title}{icon && <img src={icon} alt="buttonIcon" />}
    </div>
  )
}

interface DownloadButtonProps {
  url?: string,
  lang: string,
  flag?: any,
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ url = "", lang, flag }) => {
  const [hover, setHover] = useState(false)
  return (
    <div className="grid justify-items-center gap-2 w-24 cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseUp={() => setHover(true)} onMouseDown={() => setHover(false)}>
      <div className="w-16 h-16"><img src={flag} className={`w-full transform-all duration-500 ${hover ? 'scale-105' : ''}`} alt="flag" /></div>
      <div className="flex gap-2 text-[20px] leading-[23.44px] capitalize" ><a download='1nance White Paper.pdf' href="./1nance White Paper.pdf" target={"_blank"}><DownloadIcon className={`fill-[#FB941A] w-6 h-6 ${hover ? 'animate-bounce' : ''}`} /></a><span>{lang}</span></div>
    </div>
  )
}

interface IconButtonProps {
  handler?: any,
  icon: any,
  className?: string,
}

export const IconButton: React.FC<IconButtonProps> = ({ handler, icon, className = "" }) => {
  return (
    <div onClick={handler} className={`flex justify-center w-12 h-12 cursor-pointer transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] ${className}`}><img src={icon} alt="icon" /></div>
  )
}

interface PlayButtonProps {
  handler: any,
  showVideo: boolean,
}

export const PlayButton: React.FC<PlayButtonProps> = ({ handler, showVideo }) => {
  const [loadend, setLoadend] = useState(false)
  const videoElementRef = useRef()
  console.log(videoElementRef);

  return (
    <div className="grid justify-items-center mt-[-125px] md:mt-[-170px] lg:mt-[-140px] gap-1 lg:gap-0 text-[14px] md:text-[20px] lg:text-[16px] font-[700]">
      <div onClick={handler} className="cursor-pointer grid w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[72px] lg:h-[72px] hover:scale-[1.03] active:scale-100 pl-2 rounded-full bg-[#F97919] hover:bg-[#FFAF10] active:bg-[#F97919] transition-all duration-300 ease-out place-content-center">
        <div className="scale-90 lg:scale-100">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.364746 24.8138V0.175493L25.8057 12.4915L0.364746 24.8138ZM4 6.5V18.1967L17 12.4915L4 6.5Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="mt-[-30px] md:mt-[-40px] lg:mt-[-30px]" onClick={handler}>How it works</div>
      {showVideo ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[50vw]">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-1000 min-w-[50vw]">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">How it works</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handler}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className="relative flex-auto w-fit flex justify-center items-center p-auto">
                  {loadend ? (null) : (<div className="absolute flex justify-center items-center p-auto ">
                    <FadeLoader /></div>)}
                  <ReactPlayer url='https://www.twitch.tv/videos/106400740' loop={true} playing={true} onReady={() => setLoadend(true)} />
                  {/* <ReactPlayer url='./1.mp4' loop={true} playing={true} onReady={() => setLoadend(true)} /> */}
                </div>

              </div>
              <div className="backdrop"></div>

            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

interface ScrollUpButtonProps {
  handler: any,
  showButton: boolean,
}

export const ScrollUpButton: React.FC<ScrollUpButtonProps> = ({ handler, showButton }) => {
  return (
    <button onClick={handler} className={(showButton ? "opacity-100 p-2 lg:p-4 bottom-12 right-8 lg:bottom-20 lg:right-16" : "opacity-0 p-0 bottom-14 right-10 lg:bottom-24 lg:right-20") + " fixed border-[3px] border-[#0094FF]/60 hover:border-[#0094FF] color-[#FAFAFA] hover:bg-[#022457]/60 active:bg-[#003F9A]/60 bg-[#0B0B0B]/30 transition-all duration-300 backdrop-blur-[2px] cursor-pointer rounded-full shadow-2xl z-1000"}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fafafa"><path d="M85.98925,83.05987l72.5625,42.2475v-26.875l-72.55175,-58.11987l-72.57325,58.11987v26.875z"></path></g></g></svg>
    </button>
  )
}