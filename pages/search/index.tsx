import React, { ReactElement, useState } from 'react';
import styles from '../../styles/search.module.scss';
import { Button } from '../../components/atoms/Button';
import { SearchCategoryModal } from '../../components/organisms/SearchCategoryModal';
import { SearchBar } from '../../components/organisms/SearchBar';

export default function Search(): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className={styles.top}>
        <Button aria-label="Open a modal to select search options" bgColor="#e4e7ed" onClick={() => setModalOpen(!modalOpen)}>
          市場・業種
        </Button>
        <SearchBar
          className={styles.searchbar_wrapper}
          fill="primary"
          placeholder="銘柄コードか銘柄名を入力"
          onChange={() => console.log('Chnaged')}
          onClick={(e: any) => {
            e.preventDefault();
            console.log('Clicked');
          }}
        />
      </div>

      <SearchCategoryModal id="search-modal" onClick={() => setModalOpen(!modalOpen)} open={modalOpen} />
    </>
    // <h1>市場</h1>
    // <p>東1</p>
    // <p>東2</p>
    // <p>東マ</p>
    // <p>JQ</p>
    /* <h1>17業種</h1>
      <p>食品</p>
      <p>エネルギー資源</p>
      <p>建設・資材</p>
      <p>素材・化学</p>
      <p>医薬品</p>
      <p>自動車・輸送機</p>
      <p>鉄鋼・非鉄</p>
      <p>機械</p>
      <p>電機・精密</p>
      <p>情報通信・サービスその他</p>
      <p>電気・ガス</p>
      <p>運輸・物流</p>
      <p>商社・卸売</p>
      <p>小売</p>
      <p>銀行</p>
      <p>金融(除く銀行)</p>
      <p>不動産</p> */
    //   <h1>33業種</h1>
    //   <p>空運業</p>
    //   <p>海運業</p>
    //   <p>輸送用機器</p>
    //   <p>不動産業</p>
    //   <p>陸運業</p>
    //   <p>鉄鋼</p>
    //   <p>繊維業</p>
    //   <p>ガラス・土石製品</p>
    //   <p>化学工業</p>
    //   <p>その他金融業</p>
    //   <p>金属製品</p>
    //   <p>建設業</p>
    //   <p>精密機器</p>
    //   <p>機械</p>
    //   <p>銀行業</p>
    //   <p>食料品</p>
    //   <p>証券業</p>
    //   <p>保険業</p>
    //   <p>石油・石炭製品</p>
    //   <p>倉庫・運輸関連業</p>
    //   <p>非鉄金属</p>
    //   <p>電気機器</p>
    //   <p>医薬品</p>
    //   <p>ゴム製品</p>
    //   <p>小売業</p>
    //   <p>卸売業</p>
    //   <p>水産・農林業</p>
    //   <p>パルプ・紙</p>
    //   <p>電力・ガス業</p>
    //   <p>鉱業</p>
    //   <p>その他製品</p>
    //   <p>サービス業</p>
    //   <p>情報・通信業</p>
    // </div>
  );
}
