import {CaretRight, MapPin, Car, ShieldPlus, MagnifyingGlass} from '@phosphor-icons/react/dist/ssr';
import styles from './styles/Page.module.scss';
import DateRangePicker from '@/app/components/date-range-picker/DateRangePicker';
export default function Page() {
  return (
    <>
      <div className={styles.topBannerBox}>
        <div className={styles.topBannerContentBox}>
          <h1>
            제주프렌드와 함께하는
            <br />
            프리미엄 요트 여행
          </h1>
          <span>08.31 ~ 12.31 특별 할인 기간!</span>
          <div className={styles.bannerDetailBtn}>
            <span>자세히보기</span>
            <CaretRight size={18} color={'#059186'} weight={'bold'}></CaretRight>
          </div>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <h3>차량 검색</h3>
        <div className={styles.searchBox}>
          <div className={styles.filterBox}>
            <div className={styles.dateFilterBox}>
              <div className={styles.textBox}>
                <MapPin size={20} color={'#D2D0D0'} weight={'fill'}></MapPin>
                <span>날짜 및 시간 선택</span>
              </div>
              <DateRangePicker initStart={'06.20(화) 14:00'}></DateRangePicker>
            </div>
            <div className={styles.carFilterBox}>
              <div className={styles.textBox}>
                <Car size={20} color={'#D2D0D0'} weight={'fill'}></Car>
                <span>차종 선택</span>
              </div>
              <select className={styles.selectBox} defaultValue={0}>
                <option value={0}>전체</option>
                <option>경형</option>
                <option>소형</option>
                <option>준중형</option>
                <option>중형</option>
                <option>고급</option>
              </select>
            </div>
            <div className={styles.insuranceFilterBox}>
              <div className={styles.textBox}>
                <ShieldPlus size={20} color={'#D2D0D0'} weight={'fill'}></ShieldPlus>
                <span>보험 선택</span>
              </div>
              <select className={styles.selectBox} defaultValue={'고급면책'}>
                <option value={'고급면책'}>고급면책</option>
              </select>
            </div>
          </div>
          <div className={styles.searchBtnBox}>
            <MagnifyingGlass size={24} color={'#FFF'} weight={'bold'}></MagnifyingGlass>
            <span>검색</span>
          </div>
        </div>
      </div>
      <div className={'latestCarBox'}></div>
      <div className={'bestCarBox'}></div>
      <div className={'noticeBox'}></div>
    </>
  );
}
