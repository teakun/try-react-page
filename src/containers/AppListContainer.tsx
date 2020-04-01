import React, { Component } from 'react';
// import AppCard from '../Component/AppCard';

import AppCard from '../Component/AppCard';
import { AppItem, AppCardProps } from '../Interface/AppItem'

class AppListContainer extends Component {

  render() {
    const appList: AppItem[] = [
      { title: 'あみだくじ', description: '人数選択可能なあみだくじアプリです。', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
      { title: '回文メーカー', description: '入力した文字から自動で回文を作成します。 完成した回文はTwitterで共有しましょう！', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
      { title: 'よけろ！モモンガくん', description: '平和な森が突如リンゴの大群に襲われた！ 森の危機に今モモンガくんが立ち上がる… 画面をタップしてモモンガを左右に移動させ、迫り来るリンゴを避けきろう！', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
      { title: 'あみだくじ', description: '人数選択可能なあみだくじアプリです。', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
      { title: '回文メーカー', description: '入力した文字から自動で回文を作成します。 完成した回文はTwitterで共有しましょう！', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
      { title: 'よけろ！モモンガくん', description: '平和な森が突如リンゴの大群に襲われた！ 森の危機に今モモンガくんが立ち上がる… 画面をタップしてモモンガを左右に移動させ、迫り来るリンゴを避けきろううううううううううううううう！', image: 'https://pbs.twimg.com/profile_images/378800000721346531/6d9dac9671307c381c2491f604d98806_400x400.jpeg' },
    ]

    return (
      <div className='app-list'>
        {appList.map(item => {
          return (
            <AppCard
              item={item}
            />
          );
        })}
      </div>
    )
  }
}

export default AppListContainer;