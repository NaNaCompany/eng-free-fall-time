export const tool={
  "id": "E061",
  "slug": "eng-free-fall-time",
  "title": "자유낙하 시간 계산기",
  "title_en": "Free Fall Time Calculator",
  "category": "역학",
  "category_en": "Mechanics",
  "fields": [
    {
      "key": "h",
      "label": "낙하 높이 h",
      "label_en": "Drop height h",
      "dimension": "length",
      "example": 20,
      "constraint": "nonnegative",
      "display_unit": "m",
      "display_value": "20"
    },
    {
      "key": "g",
      "label": "중력가속도 g",
      "label_en": "Gravitational acceleration g",
      "dimension": "acceleration",
      "example": 10,
      "constraint": "positive",
      "display_unit": "ms2",
      "display_value": "10"
    }
  ],
  "result_label": "정지 출발 낙하시간 t",
  "result_label_en": "Fall time from rest t",
  "result_dimension": "time",
  "formula": "t = √(2h/g)",
  "purpose": "정지 상태에서 일정 중력으로 낙하하는 시간 계산",
  "purpose_en": "Calculate fall time from rest in uniform gravity.",
  "assumptions": "h≥0, g>0. 초기 수직속도 0, 일정한 중력, 공기저항 없는 점입자 모델이다. 큰 고도에서의 중력 변화·초기속도·부력은 제외한다.",
  "assumptions_en": "Required: h≥0, g>0 and zero initial vertical velocity in uniform gravity. Excluded: air resistance, buoyancy and gravity variation over large heights.",
  "sources": [
    {
      "label": "OpenStax · 3 5 free fall",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/3-5-free-fall"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-free-fall-time/",
  "repository": "https://github.com/NaNaCompany/eng-free-fall-time",
  "output_unit": "s"
};
