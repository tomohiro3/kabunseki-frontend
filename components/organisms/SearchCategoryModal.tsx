import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../atoms/Typography';
import { Modal, ModalContentBase } from '../molecules/Modal';
import { MediumIconButton } from '../molecules/IconButton';
import { SearchCategoryModalProps } from '../../types/organisms';
import { boxShadow } from '../../constants/shadow';
import { mobile } from '../../constants/length';

const industries = {
  industry33: [
    { id: 1, division: '水産・農林業', className: 'i33id1' },
    { id: 2, division: '食料品', className: 'i33id2' },
    { id: 3, division: '鉱業', className: 'i33id3' },
    { id: 4, division: '石油・石炭製品', className: 'i33id4' },
    { id: 5, division: '建設業', className: 'i33id5' },
    { id: 6, division: '金属製品', className: 'i33id6' },
    { id: 7, division: 'ガラス・土石製品', className: 'i33id7' },
    { id: 8, division: '繊維製品', className: 'i33id8' },
    { id: 9, division: 'パルプ・紙', className: 'i33id9' },
    { id: 10, division: '化学', className: 'i33id10' },
    { id: 11, division: '医薬品', className: 'i33id11' },
    { id: 12, division: 'ゴム製品', className: 'i33id12' },
    { id: 13, division: '輸送用機器', className: 'i33id13' },
    { id: 14, division: '鉄鋼', className: 'i33id14' },
    { id: 15, division: '非鉄金属', className: 'i33id15' },
    { id: 16, division: '機械', className: 'i33id16' },
    { id: 17, division: '電気機器', className: 'i33id17' },
    { id: 18, division: '精密機器', className: 'i33id18' },
    { id: 19, division: 'その他製品', className: 'i33id19' },
    { id: 20, division: '情報・通信業', className: 'i33id20' },
    { id: 21, division: 'サービス業', className: 'i33id21' },
    { id: 22, division: '電気・ガス業', className: 'i33id22' },
    { id: 23, division: '陸運業', className: 'i33id23' },
    { id: 24, division: '海運業', className: 'i33id24' },
    { id: 25, division: '空運業', className: 'i33id25' },
    { id: 26, division: '倉庫・運輸関連業', className: 'i33id26' },
    { id: 27, division: '卸売業', className: 'i33id27' },
    { id: 28, division: '小売業', className: 'i33id28' },
    { id: 29, division: '銀行業', className: 'i33id29' },
    { id: 30, division: '証券、商品先物取引業', className: 'i33id30' },
    { id: 31, division: '保険業', className: 'i33id31' },
    { id: 32, division: 'その他金融業', className: 'i33id32' },
    { id: 33, division: '不動産業', className: 'i33id33' }
  ],
  industry17: [
    { id: 1, division: '食品', className: 'i17id1' },
    { id: 2, division: 'エネルギー資源', className: 'i17id2' },
    { id: 3, division: '建設・資材', className: 'i17id3' },
    { id: 4, division: '素材・化学', className: 'i17id4' },
    { id: 5, division: '医薬品', className: 'i17id5' },
    { id: 6, division: '自動車・輸送機', className: 'i17id6' },
    { id: 7, division: '鉄鋼・非鉄', className: 'i17id7' },
    { id: 8, division: '機械', className: 'i17id8' },
    { id: 9, division: '電機・精密', className: 'i17id9' },
    { id: 10, division: '情報通信・サービスその他', className: 'i17id10' },
    { id: 11, division: '電気・ガス', className: 'i17id11' },
    { id: 12, division: '運輸・物流', className: 'i17id12' },
    { id: 13, division: '商社・卸売', className: 'i17id13' },
    { id: 14, division: '小売', className: 'i17id14' },
    { id: 15, division: '銀行', className: 'i17id15' },
    { id: 16, division: '金融（除く銀行）', className: 'i17id16' },
    { id: 17, division: '不動産', className: 'i17id17' }
  ]
};

export const SearchCategoryModal: React.FC<SearchCategoryModalProps> = (props) => {
  return (
    <Modal {...props}>
      <ModalContent>
        <StyledTimesButtonWrapper>
          <MediumIconButton iconName="icon-times" id="searchmodal-close" onClick={props.onClick} />
        </StyledTimesButtonWrapper>
        <StyledSearchCategoryWrapper>
          <StyledMarketsWrapper>
            <div>
              <Typography h2>市場</Typography>
            </div>
            <StyledMarketsOptionsWrapper>
              <div>東1</div>
              <div>東2</div>
              <div>東マ</div>
              <div>JQ</div>
            </StyledMarketsOptionsWrapper>
          </StyledMarketsWrapper>
          <StyledIndustriesWrapper>
            <StyledIndustiesTitleWrapper>
              <div>
                <Typography h2>17業種</Typography>
              </div>
              <div>
                <Typography h2>33業種</Typography>
              </div>
            </StyledIndustiesTitleWrapper>
            <StyledIndustriesOptionsWrapper>
              {industries.industry17.map((el) => (
                <div className={el.className} key={el.division + el.id}>
                  {el.division}
                </div>
              ))}
              {industries.industry33.map((el) => (
                <div className={el.className} key={el.division + el.id}>
                  {el.division}
                </div>
              ))}
            </StyledIndustriesOptionsWrapper>
          </StyledIndustriesWrapper>
        </StyledSearchCategoryWrapper>
      </ModalContent>
    </Modal>
  );
};

const StyledTimesButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
const ModalContent = styled(ModalContentBase)`
  width: 650px;
  height: 700px;
`;

const StyledSearchCategoryWrapper = styled.div`
  margin: 5px 48px 39px 48px;
  @media screen and (max-width: ${mobile}) {
    margin: 5px 28px 39px 28px;
  }
`;

const StyledMarketsWrapper = styled.div`
  width: 60%;
  margin: 0 auto 16px auto;
`;

const StyledMarketsOptionsWrapper = styled.div`
  display: flex;
  & div {
    width: 100px;
    border: 1px solid grey;
    font-size: 1.6rem;
    text-align: center;
  }
`;

const StyledIndustriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIndustiesTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  & div {
    width: 100%;
    text-align: center;
  }
`;

const StyledIndustriesOptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'i17id1 i33id1'
    'i17id1 i33id2'
    'i17id2 i33id3'
    'i17id2 i33id4'
    'i17id3 i33id5'
    'i17id3 i33id6'
    'i17id3 i33id7'
    'i17id4 i33id8'
    'i17id4 i33id9'
    'i17id4 i33id10'
    'i17id5 i33id11'
    'i17id6 i33id12'
    'i17id6 i33id13'
    'i17id7 i33id14'
    'i17id7 i33id15'
    'i17id8 i33id16'
    'i17id9 i33id17'
    'i17id9 i33id18'
    'i17id10 i33id19'
    'i17id10 i33id20'
    'i17id10 i33id21'
    'i17id11 i33id22'
    'i17id12 i33id23'
    'i17id12 i33id24'
    'i17id12 i33id25'
    'i17id12 i33id26'
    'i17id13 i33id27'
    'i17id14 i33id28'
    'i17id15 i33id29'
    'i17id16 i33id30'
    'i17id16 i33id31'
    'i17id16 i33id32'
    'i17id17 i33id33';
  box-shadow: ${boxShadow};
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    height: 100%;
    font-size: 1.6rem;
  }
  & .i33id1 {
    grid-area: i33id1;
  }
  & .i33id2 {
    grid-area: i33id2;
  }
  & .i33id3 {
    grid-area: i33id3;
  }
  & .i33id4 {
    grid-area: i33id4;
  }
  & .i33id5 {
    grid-area: i33id5;
  }
  & .i33id6 {
    grid-area: i33id6;
  }
  & .i33id7 {
    grid-area: i33id7;
  }
  & .i33id8 {
    grid-area: i33id8;
  }
  & .i33id9 {
    grid-area: i33id9;
  }
  & .i33id10 {
    grid-area: i33id10;
  }
  & .i33id11 {
    grid-area: i33id11;
  }
  & .i33id12 {
    grid-area: i33id12;
  }
  & .i33id13 {
    grid-area: i33id13;
  }
  & .i33id14 {
    grid-area: i33id14;
  }
  & .i33id15 {
    grid-area: i33id15;
  }
  & .i33id16 {
    grid-area: i33id16;
  }
  & .i33id17 {
    grid-area: i33id17;
  }
  & .i33id18 {
    grid-area: i33id18;
  }
  & .i33id19 {
    grid-area: i33id19;
  }
  & .i33id20 {
    grid-area: i33id20;
  }
  & .i33id21 {
    grid-area: i33id21;
  }
  & .i33id22 {
    grid-area: i33id22;
  }
  & .i33id23 {
    grid-area: i33id23;
  }
  & .i33id24 {
    grid-area: i33id24;
  }
  & .i33id25 {
    grid-area: i33id25;
  }
  & .i33id26 {
    grid-area: i33id26;
  }
  & .i33id27 {
    grid-area: i33id27;
  }
  & .i33id28 {
    grid-area: i33id28;
  }
  & .i33id29 {
    grid-area: i33id29;
  }
  & .i33id30 {
    grid-area: i33id30;
  }
  & .i33id31 {
    grid-area: i33id31;
  }
  & .i33id32 {
    grid-area: i33id32;
  }
  & .i33id33 {
    grid-area: i33id33;
  }
  & .i17id1 {
    grid-area: i17id1;
  }
  & .i17id2 {
    grid-area: i17id2;
  }
  & .i17id3 {
    grid-area: i17id3;
  }
  & .i17id4 {
    grid-area: i17id4;
  }
  & .i17id5 {
    grid-area: i17id5;
  }
  & .i17id6 {
    grid-area: i17id6;
  }
  & .i17id7 {
    grid-area: i17id7;
  }
  & .i17id8 {
    grid-area: i17id8;
  }
  & .i17id9 {
    grid-area: i17id9;
  }
  & .i17id10 {
    grid-area: i17id10;
  }
  & .i17id11 {
    grid-area: i17id11;
  }
  & .i17id12 {
    grid-area: i17id12;
  }
  & .i17id13 {
    grid-area: i17id13;
  }
  & .i17id14 {
    grid-area: i17id14;
  }
  & .i17id15 {
    grid-area: i17id15;
  }
  & .i17id16 {
    grid-area: i17id16;
  }
  & .i17id17 {
    grid-area: i17id17;
  }
`;
