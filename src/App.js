import React, { useState } from 'react';
import '../src/assets/scss/index.scss'
import tes_img1 from '../src/assets/img/tes_img1.jpg'

export default function App() {
	// 저장 해야 될 변수는 useState로 선언
	// 변수 변경 시, setIsActive로 변경
	const [isActive, setIsActive] = useState(false);
	const [list] = useState([1, 2, 3]);
	
	return (
		<>
			{/* 변수 사용법, 변경법 */}
			<div className='test' onClick={()=> setIsActive(!isActive)}>
				{isActive ? 'true' : 'false'}
			</div>

			{/* 이미지 사용법 */}
			<div className="">
				<img src={tes_img1} alt=""/>
			</div>

			{/* 리스트 출력 시 map 함수로 출력 */}
			{/* 만약 리스트 중 필터링 필요시 filter 함수로 제거 */}
				{list.map(item => {
					return <div key={item } className={`box test-${item}`} >{item}</div>
				})}			
			
			<div className="gap">

			</div>
			
			{list.filter(item => item !== 1).map(item => {
				return <div key={item } className={`box test-${item}`} >{item}</div>
			})}			

		</>
	);
}
