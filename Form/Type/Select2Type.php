<?php
namespace Kit\FormBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class Select2Type extends AbstractType
{

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'placeholder' => ' - ',
            'range' => 0,
            'type' => ''
        ));
    }

    /**
     *
     * {@inheritdoc}
     *
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        // For Symfony 2.0:
        // $view->set('base_path', $form->getAttribute('base_path'));
        
        // For Symfony 2.1 and higher:
        $view->vars['placeholder'] = $options['placeholder'];
        $view->vars['range'] = $options['range'];
        $view->vars['type'] = $options['type'];
    }

    /**
     *
     * {@inheritdoc}
     *
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->setAttribute('placeholder', $options['placeholder'])
        ->setAttribute('range', $options['range'])
        ->setAttribute('type', $options['type']);
    }
    
    public function getParent()
    {
        return EntityType::class;
    }
}