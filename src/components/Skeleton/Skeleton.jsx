import { Skeleton } from '@mui/material';

export const SkeletonComponent = () => { 
    return (
         <div >
        <Skeleton className='px-10' variant="rectangular" width={360} height={462} />
              <Skeleton width={360} height={40}/>
              <Skeleton width={360} height={40} />
       </div>
    )
 }