import trocoIcon from '@/assets/troco.png';
import oremsIcon from '@/assets/orems.png';
import bloomsIcon from '@/assets/bloom.png'

const trustedCompanies = [trocoIcon, oremsIcon, bloomsIcon]

const TrustedCompanies = () => {
   return (
     <div className="pt-8 pb-16 flex flex-col items-center justify-center font-geist">
        <p className="text-xs text-muted-foreground mb-5 uppercase tracking-wider">
            Trusted by African Startups
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-1 md:gap-x-3 lg:gap-x-10">
            {trustedCompanies.map(icon => <img src={icon} className="w-[125px] aspect-[2097/1000] object-cover md:w-[150px]" />)}
        </div>
    </div>
   );

}

export default TrustedCompanies;