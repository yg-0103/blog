import { Button } from '@components/Button/Button.style'
import { getType } from '@utils/getType'
import { useState } from 'react'
import VocaInput from '../VocaInput'
import * as S from './VocaField.style'

interface Props {
  voca: {
    quiz: string | string[]
    answer: string | string[]
  }
}

export default function VocaField({ voca }: Props) {
  const [showAnswer, setShowAnswer] = useState(false)

  const handleChangeShowAnswer = () => {
    setShowAnswer(!showAnswer)
    setTimeout(() => setShowAnswer(false), 1000)
  }

  return (
    <S.VocaField>
      <S.QuizWrapper>
        {getType(voca.quiz) === 'string' ? (
          <S.Quiz>{voca.quiz}</S.Quiz>
        ) : (
          (voca.quiz as string[]).map((quiz) => <S.Quiz key={quiz}>{quiz}</S.Quiz>)
        )}
      </S.QuizWrapper>
      <S.AnswerWrapper>
        {getType(voca.answer) === 'string' ? (
          <VocaInput answer={voca.answer} />
        ) : (
          (voca.answer as string[]).map((answer) => <VocaInput key={answer} answer={voca.answer} />)
        )}
        <Button
          style={{ width: '6rem', height: '3rem', fontSize: '1.2rem' }}
          onClick={handleChangeShowAnswer}
        >
          정답 보기
        </Button>
        <S.AnswerBox show={showAnswer}>
          {getType(voca.answer) === 'string' ? (
            <S.Answer>{voca.answer}</S.Answer>
          ) : (
            (voca.answer as string[]).map((answer) => <S.Answer key={answer}>{answer}</S.Answer>)
          )}
        </S.AnswerBox>
      </S.AnswerWrapper>
    </S.VocaField>
  )
}
