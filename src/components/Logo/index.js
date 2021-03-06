import React from 'react'
import { Platform } from 'react-native'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg'

export const Logo = (props) => {
  if (Platform.OS === 'web') {
    return (
      <svg
        width={120}
        height={50}
        viewBox='83.876 13.989 332.247 122.021'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
      >
        <defs>
          <linearGradient
            id='prefix__editing-sticker-gradient'
            x1={0.5}
            y1={0.2}
            x2={0.5}
            y2={0.8}
          >
            <stop offset={0} stopColor='#fd9' />
            <stop offset={1} stopColor='#9df' />
          </linearGradient>
          <filter
            id='prefix__editing-sticker'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
          >
            <feMorphology radius={1} in='SourceAlpha' result='alpha-erode' />
            <feConvolveMatrix
              order='3,3'
              divisor={1}
              kernelMatrix='0 1 0 1 1 1 0 1 0'
              in='alpha-erode'
              result='alpha-round'
            />
            <feMorphology
              operator='dilate'
              radius={3.5}
              in='alpha-round'
              result='dilate-shadow'
            />
            <feGaussianBlur
              in='dilate-shadow'
              stdDeviation={1.5}
              result='shadow'
            />
            <feFlood floodColor='#fff' result='flood-sticker' />
            <feComposite
              operator='in'
              in='flood-sticker'
              in2='alpha-round'
              result='comp-sticker'
            />
            <feMorphology
              operator='dilate'
              radius={3}
              in='comp-sticker'
              result='morph-sticker'
            />
            <feConvolveMatrix
              order='3,3'
              divisor={1}
              kernelMatrix='0 1 0 1 1 1 0 1 0'
              in='morph-sticker'
              result='sticker'
            />
            <feMerge>
              <feMergeNode in='shadow' />
              <feMergeNode in='sticker' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g filter='url(#prefix__editing-sticker)'>
          <path
            d='M5.63-26.75h0q2.18-3.07 5.47-5.12h0q3.3-2.05 7.33-2.05h0q4.03 0 5.95 1.28h0l12.55-1.28-4.35 24.58h0Q30.34 3.2 25.6 8.13h0q-4.54 4.67-13.38 4.67h0q-6.72 0-10.56-2.11h0q-3.84-2.11-3.84-5.63h0q0-2.63 1.99-4.13h0Q1.79-.58 4.86-.58h0Q7.55-.58 9.6.64h0q1.22.64 1.79 1.54h0Q9.92 3.46 9.92 5.57h0q0 2.75 2.56 2.75h0q4.29 0 6.72-10.11h0q.7-2.75 1.28-5.51h0q-2.88 3.52-9.41 3.52h0q-4.54 0-7.17-2.17h0q-2.62-2.18-2.62-7.3h0q0-3.2 1.09-6.81h0q1.09-3.62 3.26-6.69zm8.32 13.69h0q0 4.36 2.24 4.36h0q1.54 0 3.01-1.67h0q1.15-1.34 1.6-3.33h0l3.26-16.44h0q-.32-.07-.64-.2h0q-.64-.25-1.47-.25h0q-3.9 0-6.21 6.4h0q-1.79 4.99-1.79 11.13zM42.21-1.92h0q-1.51-1.66-2.18-4.29h0q-.67-2.62-.67-6.91h0q0-4.29 1.47-8.19h0q1.47-3.91 4.16-6.72h0q5.51-5.89 14.59-5.89h0q3.27 0 5.64 1.09h0l10.94-1.09-4.74 24.96h0q-.19.77-.19 2.18h0q0 1.4.87 2.3h0q.86.9 2.14 1.02h0Q73.6-1.28 71.26 0h0q-2.33 1.28-4.96 1.28h0q-2.62 0-4.38-.99h0q-1.76-.99-2.27-2.66h0q-1.03 1.6-3.2 2.63h0q-2.18 1.02-5.09 1.02h0q-2.91 0-5.28-.77h0q-2.37-.77-3.87-2.43zm13.5-25.98h0q-.73 1.15-1.37 3.1h0q-.64 1.95-1.7 7.17h0q-1.06 5.21-1.06 8.93h0q0 3.71.58 4.8h0q.58 1.08 1.6 1.08h0q2.05 0 3.55-1.95h0q1.51-1.95 2.08-5.41h0l3.39-18.75h0q-1.34-1.15-2.91-1.15h0q-1.57 0-2.49.51h0q-.93.51-1.67 1.67zm39.2 24.38h0q-1.98 4.8-8.32 4.8h0q-3.2 0-5.25-2.24h0q-1.66-1.86-1.66-3.97h0q0-4.8 2.24-15.29h0l4.67-24.58 12.99-1.28-6.2 32.38h0q-1.09 4.74-1.09 6.4h0q0 3.65 2.62 3.78zm20.74 0h0q-1.99 4.8-8.32 4.8h0q-3.2 0-5.25-2.24h0q-1.66-1.86-1.66-3.97h0q0-4.8 2.24-15.29h0l4.67-24.58 12.99-1.28-6.21 32.38h0q-1.09 4.74-1.09 6.4h0q0 3.65 2.63 3.78zm31.36-7.3h0q1.6 1.09 1.6 3.49h0q0 2.4-1.22 3.94h0q-1.21 1.53-3.2 2.56h0q-4.09 2.11-8.51 2.11h0q-4.42 0-7.01-.96h0q-2.59-.96-4.32-2.75h0q-3.39-3.39-3.39-9.6h0q0-9.67 5.25-15.55h0q5.63-6.34 15.42-6.34h0q6.08 0 9.09 2.56h0q2.24 1.92 2.24 5.06h0q0 11.26-19.46 11.26h0q-.25 1.66-.25 3.07h0q0 2.95 1.31 4.07h0q1.31 1.12 3.74 1.12h0q2.44 0 5.03-1.12h0q2.59-1.12 3.68-2.92zm-13.06-6.97h0q4.55 0 7.17-2.82h0q2.62-2.69 2.62-6.97h0q0-1.48-.54-2.28h0q-.54-.8-1.63-.8h0q-1.09 0-2.02.42h0q-.93.42-1.89 1.82h0q-2.36 3.2-3.71 10.63zm41.22-.19h0q2.3-4.1 2.3-8.26h0q0-2.75-1.98-2.75h0q-1.54 0-3.14 2.62h0q-1.66 2.63-2.17 6.02h0L166.85 0 153.6 1.28l6.53-33.92 10.56-1.28-1.15 6.46h0q3.13-6.46 10.17-6.46h0q3.71 0 5.73 1.92h0q2.02 1.92 2.02 5.86h0q0 3.93-2.6 6.43h0q-2.59 2.49-7 2.49h0q-1.92 0-2.69-.76zm33.66 10.75h0q-3.33 3.45-9.41 3.45h0q-7.61 0-9.21-5.56h0q-.51-1.67-.51-3.52h0q0-1.86.38-3.78h0l3.01-16 12.99-1.28-3.52 18.62h0q-.13.84-.32 1.73h0q-.19.9-.19 1.83h0q0 .92.32 1.53h0q.32.61.77.99h0q.76.52 2.14.52h0q1.38 0 2.56-1.67h0q1.18-1.66 1.76-4.54h0l3.52-17.73 12.61-1.28-4.8 25.15h0q-2.37 12.29-7.23 17.15h0q-2.5 2.5-5.73 3.49h0q-3.23.99-7.39.99h0q-6.72 0-10.56-2.11h0q-3.84-2.11-3.84-5.63h0q0-2.62 1.98-4.13h0q1.98-1.5 5.06-1.5h0q2.68 0 4.73 1.15h0q1.22.7 1.79 1.6h0q-1.47 1.28-1.47 3.39h0q0 2.82 2.56 2.82h0q4.23 0 6.66-9.73h0q.7-2.88 1.34-5.95z'
            fill='url(#prefix__editing-sticker-gradient)'
            stroke='#000'
            strokeWidth={2.5}
            transform='translate(136.897 104.462)'
          />
        </g>
        <style />
      </svg>
    )
  } else {
    return (
      <Svg
        width={120}
        height={50}
        viewBox='83.876 13.989 332.247 122.021'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
      >
        <Defs>
          <LinearGradient
            id='prefix__editing-sticker-gradient'
            x1={0.5}
            y1={0.2}
            x2={0.5}
            y2={0.8}
          >
            <Stop offset={0} stopColor='#fd9' />
            <Stop offset={1} stopColor='#9df' />
          </LinearGradient>
        </Defs>
        <G filter='url(#prefix__editing-sticker)'>
          <Path
            d='M5.63-26.75h0q2.18-3.07 5.47-5.12h0q3.3-2.05 7.33-2.05h0q4.03 0 5.95 1.28h0l12.55-1.28-4.35 24.58h0Q30.34 3.2 25.6 8.13h0q-4.54 4.67-13.38 4.67h0q-6.72 0-10.56-2.11h0q-3.84-2.11-3.84-5.63h0q0-2.63 1.99-4.13h0Q1.79-.58 4.86-.58h0Q7.55-.58 9.6.64h0q1.22.64 1.79 1.54h0Q9.92 3.46 9.92 5.57h0q0 2.75 2.56 2.75h0q4.29 0 6.72-10.11h0q.7-2.75 1.28-5.51h0q-2.88 3.52-9.41 3.52h0q-4.54 0-7.17-2.17h0q-2.62-2.18-2.62-7.3h0q0-3.2 1.09-6.81h0q1.09-3.62 3.26-6.69zm8.32 13.69h0q0 4.36 2.24 4.36h0q1.54 0 3.01-1.67h0q1.15-1.34 1.6-3.33h0l3.26-16.44h0q-.32-.07-.64-.2h0q-.64-.25-1.47-.25h0q-3.9 0-6.21 6.4h0q-1.79 4.99-1.79 11.13zM42.21-1.92h0q-1.51-1.66-2.18-4.29h0q-.67-2.62-.67-6.91h0q0-4.29 1.47-8.19h0q1.47-3.91 4.16-6.72h0q5.51-5.89 14.59-5.89h0q3.27 0 5.64 1.09h0l10.94-1.09-4.74 24.96h0q-.19.77-.19 2.18h0q0 1.4.87 2.3h0q.86.9 2.14 1.02h0Q73.6-1.28 71.26 0h0q-2.33 1.28-4.96 1.28h0q-2.62 0-4.38-.99h0q-1.76-.99-2.27-2.66h0q-1.03 1.6-3.2 2.63h0q-2.18 1.02-5.09 1.02h0q-2.91 0-5.28-.77h0q-2.37-.77-3.87-2.43zm13.5-25.98h0q-.73 1.15-1.37 3.1h0q-.64 1.95-1.7 7.17h0q-1.06 5.21-1.06 8.93h0q0 3.71.58 4.8h0q.58 1.08 1.6 1.08h0q2.05 0 3.55-1.95h0q1.51-1.95 2.08-5.41h0l3.39-18.75h0q-1.34-1.15-2.91-1.15h0q-1.57 0-2.49.51h0q-.93.51-1.67 1.67zm39.2 24.38h0q-1.98 4.8-8.32 4.8h0q-3.2 0-5.25-2.24h0q-1.66-1.86-1.66-3.97h0q0-4.8 2.24-15.29h0l4.67-24.58 12.99-1.28-6.2 32.38h0q-1.09 4.74-1.09 6.4h0q0 3.65 2.62 3.78zm20.74 0h0q-1.99 4.8-8.32 4.8h0q-3.2 0-5.25-2.24h0q-1.66-1.86-1.66-3.97h0q0-4.8 2.24-15.29h0l4.67-24.58 12.99-1.28-6.21 32.38h0q-1.09 4.74-1.09 6.4h0q0 3.65 2.63 3.78zm31.36-7.3h0q1.6 1.09 1.6 3.49h0q0 2.4-1.22 3.94h0q-1.21 1.53-3.2 2.56h0q-4.09 2.11-8.51 2.11h0q-4.42 0-7.01-.96h0q-2.59-.96-4.32-2.75h0q-3.39-3.39-3.39-9.6h0q0-9.67 5.25-15.55h0q5.63-6.34 15.42-6.34h0q6.08 0 9.09 2.56h0q2.24 1.92 2.24 5.06h0q0 11.26-19.46 11.26h0q-.25 1.66-.25 3.07h0q0 2.95 1.31 4.07h0q1.31 1.12 3.74 1.12h0q2.44 0 5.03-1.12h0q2.59-1.12 3.68-2.92zm-13.06-6.97h0q4.55 0 7.17-2.82h0q2.62-2.69 2.62-6.97h0q0-1.48-.54-2.28h0q-.54-.8-1.63-.8h0q-1.09 0-2.02.42h0q-.93.42-1.89 1.82h0q-2.36 3.2-3.71 10.63zm41.22-.19h0q2.3-4.1 2.3-8.26h0q0-2.75-1.98-2.75h0q-1.54 0-3.14 2.62h0q-1.66 2.63-2.17 6.02h0L166.85 0 153.6 1.28l6.53-33.92 10.56-1.28-1.15 6.46h0q3.13-6.46 10.17-6.46h0q3.71 0 5.73 1.92h0q2.02 1.92 2.02 5.86h0q0 3.93-2.6 6.43h0q-2.59 2.49-7 2.49h0q-1.92 0-2.69-.76zm33.66 10.75h0q-3.33 3.45-9.41 3.45h0q-7.61 0-9.21-5.56h0q-.51-1.67-.51-3.52h0q0-1.86.38-3.78h0l3.01-16 12.99-1.28-3.52 18.62h0q-.13.84-.32 1.73h0q-.19.9-.19 1.83h0q0 .92.32 1.53h0q.32.61.77.99h0q.76.52 2.14.52h0q1.38 0 2.56-1.67h0q1.18-1.66 1.76-4.54h0l3.52-17.73 12.61-1.28-4.8 25.15h0q-2.37 12.29-7.23 17.15h0q-2.5 2.5-5.73 3.49h0q-3.23.99-7.39.99h0q-6.72 0-10.56-2.11h0q-3.84-2.11-3.84-5.63h0q0-2.62 1.98-4.13h0q1.98-1.5 5.06-1.5h0q2.68 0 4.73 1.15h0q1.22.7 1.79 1.6h0q-1.47 1.28-1.47 3.39h0q0 2.82 2.56 2.82h0q4.23 0 6.66-9.73h0q.7-2.88 1.34-5.95z'
            fill='url(#prefix__editing-sticker-gradient)'
            stroke='#000'
            strokeWidth={2.5}
            transform='translate(136.897 104.462)'
          />
        </G>
      </Svg>
    )
  }
}
