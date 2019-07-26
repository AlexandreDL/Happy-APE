<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PublicController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->json(['title' => 'homepage', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }
    
     /**
     * @Route("/mentions-legale", name="legal_Mentions")
     */
    public function legalMentions()
    {
        return $this->json(['title' => 'Mentions légales', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/conditions-vente", name="sales_conditions")
     */
    public function sales()
    {
        return $this->json(['title' => 'Conditions de vente', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/conditions-utilisation", name="terms_of_use")
     */
    public function terms()
    {
        return $this->json(['title' => 'Conditions utilisation', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/qui-sommes-nous", name="who_are_we")
     */
    public function Who()
    {
        return $this->json(['title' => 'Qui sommes-nous', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->json(['title' => 'Contact', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }
}

