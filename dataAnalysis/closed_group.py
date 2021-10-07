import pandas as pd

df = pd.read_csv('../mydata.csv', encoding = 'cp949')
closed = df[df['상세영업상태명'] == '폐업']
# 폐업한 데이터만 가지고 오기

closed = closed.drop(closed.columns[0:7], axis = 1)
closed = closed.drop(closed.columns[25:43], axis = 1)
# 처음에 쓸모없는 컬럼 제거

closed = closed.dropna(subset = ['지번주소'])
# 지번주소 컬럼 내 결측치 제거

def goo(x):
    if x[0] == "서":
        res = x.split(' ')[1]
        return res
    else:
        return None
# 지역구 추출하는 함수
## 데이터 내 '서울특별시 ~' 로 시작하는 주소가 없는 경우 Null처리하는 함수 정의

closed['지역(구)'] = closed['지번주소'].apply(goo)
# 지역구 추출 및 저장

closed = closed.dropna(subset = ['업태구분명'])
closed = closed.dropna(subset = ['폐업일자'])
# 업태구분명, 폐업일자 컬럼의 결측치 제거

closed = closed.drop(closed.columns[18:25], axis = 1)

closed = closed[closed['폐업일자'] >= 20180220]
# 2018.02.20 이후 데이터만 가져오기

closed = closed.drop(columns = ['휴업시작일자', '휴업종료일자', '재개업일자', '전화번호', '도로명주소', '소재지우편번호', '도로명우편번호', '최종수정일자', '데이터갱신구분', '데이터갱신일자'], axis = 1)
# 마지막으로 쓸모없는 컬럼 모두 제거

closed_group = closed.groupby(['지역(구)','폐업연월', '업태구분명'])['사업장명'].count().unstack().fillna(0)
# 지역구, 폐업연월 기준으로 업태구분명 개수 그룹화