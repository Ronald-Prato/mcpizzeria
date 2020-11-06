import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { MainWrapper, MainContent, PizzaBackground, BackIconContainer, Card, PizzaContainer,EmailAdress, EditIconContainer, InputContainer, UserImageContainer, UserImage, UserName } from './styles';

import pizzaImg from '../../assets/Pizza.png';

import { IoMdPerson, IoMdCreate, IoMdArrowBack } from 'react-icons/io';

import { User } from '../../globalTypes';

import { FilePond } from 'react-filepond';

import './filepond.css';

type ConfigViewProps = (props: {
  history: any
}) => React.ReactElement;

let localImageInitialProps: File[];

const ConfigView: ConfigViewProps = ({ history }) => {
  const currentUser: User = JSON.parse(localStorage.getItem('loggedUser') || '');
  const [localFile, setLocalFile] = useState(localImageInitialProps);
  const [localImage, setLocalImage] = useState(localStorage.getItem(`image-${currentUser.email}`));

  const reader = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
  }
  useEffect(() => {
    localFile && localFile[0] && // if the local image exists, just convert it in 64base and save it in local storage
    reader(localFile[0]).then((result: any) => {
      localStorage.setItem(`image-${currentUser.email}`, result)
      setLocalImage(result);
    });
  }, [localFile]);

  return (
    <MainWrapper>
      <PizzaContainer>
        <PizzaBackground src={pizzaImg}/>
      </PizzaContainer>
      <MainContent>
        <Card>

          <BackIconContainer onClick={() => history.push('/home')}>
            <IoMdArrowBack size={25}/>
          </BackIconContainer>

          <UserImageContainer>
            {
              localImage?.length ?
                <UserImage src={localImage || ''}/>
              :
                <IoMdPerson style={{cursor: 'pointer'}} color={'#323232'} size={100}/>
            }
            
          </UserImageContainer>

          <UserName> { currentUser.name } </UserName>
          <EmailAdress> { currentUser.email } </EmailAdress>
          
          <EditIconContainer>
            <IoMdCreate color={'#323232'} size={25}/>
          </EditIconContainer>

          <InputContainer>
            <FilePond
                labelIdle=''
                className={'filepond-modifier'}
                allowMultiple={false}
                files={[]}
                maxFiles={1}
                onupdatefiles={(event) => {
                    setLocalFile(event.map(single_file => {
                      return single_file.file;
                    }))
                }}
            />
          </InputContainer>
        </Card>
      </MainContent>
    </MainWrapper>
  );
};

export default withRouter(ConfigView);