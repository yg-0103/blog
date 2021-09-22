import { Button } from '@components/Button/Button.style'
import { Voca } from '@pages/voca/data'
import { getType } from '@utils/getType'
import { ChangeEvent, useState } from 'react'
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
    setTimeout(() => setShowAnswer(false), 2000)
  }

  return (
    <S.VocaField>
      {getType(voca.quiz) === 'string' ? (
        <S.Vocabulary>{voca.quiz}</S.Vocabulary>
      ) : (
        (voca.quiz as string[]).map((quiz) => <S.Vocabulary key={quiz}>{quiz}</S.Vocabulary>)
      )}
      {getType(voca.answer) === 'string' ? (
        <VocaInput answer={voca.answer} />
      ) : (
        (voca.answer as string[]).map((answer) => <VocaInput key={answer} answer={voca.answer} />)
      )}
      <Button style={{ width: '9rem', fontSize: '1.5rem' }} onClick={handleChangeShowAnswer}>
        정답 보기
      </Button>
      <S.AnswerBox show={showAnswer}>
        {getType(voca.answer) === 'string' ? (
          <S.Answer>{voca.answer}</S.Answer>
        ) : (
          (voca.answer as string[]).map((answer) => <S.Answer key={answer}>{answer}</S.Answer>)
        )}
      </S.AnswerBox>
    </S.VocaField>
  )
}
