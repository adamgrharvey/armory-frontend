import React from 'react';
import Specialization from './Specialization';
import Talents from './Talents';
import { Helmet } from 'react-helmet';
export default function SpecializationSection(props) {
  let specSelected = props.specSelected;
  let character = props.character;
  let setSpecSelected = props.setSpecSelected;
  let wowClass = character.characterData.miscInfo.wowClass.charAt(0).toLowerCase() + character.characterData.miscInfo.wowClass.substring(1).toLowerCase();

  return (
    <div>
      <div className='Divider' />
      <div className='SectionHeader'>
        Specialization
      </div>
      <div className='SpecTree'>
        <div>
          <Specialization position={"Primary"} characterData={character.characterData} setSpecSelected={setSpecSelected} selected={specSelected.primaryHighlight} wowClass={character.characterData.miscInfo.wowClass} spec={character.characterData.primarySpecString} active={character.characterData.activeSpec === "1" ? "Active" : "Inactive"} />

          <Specialization position={"Secondary"} characterData={character.characterData} setSpecSelected={setSpecSelected} selected={specSelected.secondaryHighlight} wowClass={character.characterData.miscInfo.wowClass} spec={character.characterData.secondarySpecString} active={character.characterData.activeSpec === "2" ? "Active" : "Inactive"} />
        </div>

        <div className='Talents'>
          <Helmet>
            <script>{`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true }`}</script>
            <script src="https://wow.zamimg.com/js/tooltips.js"></script>
          </Helmet>

          {specSelected.talentString !== "" && (
            <Talents display={specSelected.primaryHighlight} wowClass={wowClass} talents={character.characterData.primarySpecString} />)}

          {(specSelected.talentString !== "") && (
            <Talents display={specSelected.secondaryHighlight} wowClass={wowClass} talents={character.characterData.secondarySpecString} />)}
        </div>

      </div>
    </div>
  )
}