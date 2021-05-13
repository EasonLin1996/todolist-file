import React, { Fragment } from 'react';
import {TitleTxt,SubTitleTxt} from '../styled/styled'

const Title = (props)=> {
  return (
    <Fragment>
      <TitleTxt>
        TODO<span>LIST</span>
      </TitleTxt>
      <SubTitleTxt>
        A Simple todolist built react hooks &#38; context
      </SubTitleTxt>
    </Fragment>
  );
}

export default Title;
