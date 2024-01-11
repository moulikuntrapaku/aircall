import React, { useState, useEffect } from 'react';
import { FiPhoneIncoming } from "react-icons/fi";
import { MdPhoneMissed,  MdOutlinePhone, MdOutlineArchive } from "react-icons/md";
import { CgVoicemailO } from "react-icons/cg";



const ActivityContainer = ({ activities, selectedButton }) => {

  const [activity, setActivity] = useState(activities);
  useEffect(() => {
    setActivity(activities);
  }, [activities]);


  const handleArchiveAll = () => {
    const updatedActivities = activity.map(item => ({
      ...item,
      is_archived: selectedButton === 'inbox' ? true : false
    }));
    setActivity(updatedActivities);
  };


  const buttonLabel = selectedButton=='inbox' ? 'Archive All Calls' : 'Unarchive All Calls';

  let unarchivedActivities = activity.filter(activity => !activity?.is_archived);
  let archivedActivities = activity.filter(activity => activity?.is_archived);

  const filteredActivity = selectedButton=='inbox' ? unarchivedActivities : archivedActivities;


    return (
      <div className='activity-container'>
        <button onClick={handleArchiveAll} className='archive-button'>
        <MdOutlineArchive size={20} /> {buttonLabel}
        </button>
      {filteredActivity.length===0 ? (<p className='no-activities'>No Activity</p>) : 
      filteredActivity.map(item => (
        <div key={item.id}>
          <p className='date'>{item.created_at.substring(0,10)}</p>
          <div className='activity'>
              <div className='call-logo'>
              {item.call_type === 'missed' && <MdPhoneMissed size={25}/>}
              {item.call_type === 'voicemail' && <CgVoicemailO size={25}/>}
              {item.call_type === 'answered' && <FiPhoneIncoming size={25}/>}
              {!item.call_type && <MdOutlinePhone size={25}/>}
              </div>

              <div className='activity-detail'>
              <div>
                {item.from ?
                (<h2 className='phone-number'>+91 {item.from}</h2>) :
                (<h2 className='phone-number'>Unknown number</h2>)}
              </div>
              <div>
              {item.call_type ?
                (<p>{item.call_type}</p>) :
                (<p>Details not found</p>)}
              </div>
              </div>

              <div className='activity-time'>
                {item.created_at.substring(11,16)}
              </div>
          </div>
        </div>
      ))}
  </div>
      );
};

export default ActivityContainer;