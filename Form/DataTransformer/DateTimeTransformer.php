<?php
namespace Kit\FormBundle\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class DateTimeTransformer implements DataTransformerInterface
{
    /**
     * Transforms an object (DateTime) to a string (date).
     *
     * @param  \DateTime|string $dateTime
     * @return string
     */
    public function transform($dateTime)
    {
        if($dateTime instanceof \DateTime){
            return $dateTime->format('Y-m-d H:i:s');
        }
        
        return $dateTime;
    }
    
    /**
     * Transforms a string (date) to an object (DateTime).
     *
     * @param  string $dateStr
     * @return string
     * @throws TransformationFailedException if object (issue) is not found.
     */
    public function reverseTransform($dateStr)
    {
        try{
            $dateTime = new \DateTime($dateStr);
        }catch (\Exception $e) {
            throw new TransformationFailedException(sprintf(
                'DateTime convert error!',
                $e->getMessage()
                ));
        }
        
        return $dateTime;
    }
}