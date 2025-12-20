import trocoIcon from '@/assets/troco.png';
import oremsIcon from '@/assets/orems.png';
import bloomsIcon from '@/assets/bloom.png'

const trustedCompanies = [trocoIcon, oremsIcon, bloomsIcon]

const TrustedCompanies = () => {
   return (
     <div className="py-16 flex flex-col items-center justify-center font-geist">
        <p className="text-xs text-muted-foreground mb-5 uppercase tracking-wider">
            Trusted by African Startups
        </p>
        <div className="flex items-center justify-center gap-1">
            {trustedCompanies.map(icon => <img src={icon} className="w-[200px] aspect-[2097/1000] object-cover scale-[.50] md:scale-90 sm:scale-100" />)}
        </div>
    </div>
   );

}

export default TrustedCompanies;