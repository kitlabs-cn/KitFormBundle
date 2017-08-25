<?php

namespace Kit\FormBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('KitFormBundle:Default:index.html.twig');
    }
}
