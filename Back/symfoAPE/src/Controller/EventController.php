<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    /**
     * @Route("/events", name="events_list")
     */
    public function list()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/events/{id}", name="event_details")
     */
    public function show()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/private/events/create", name="event_add")
     */
    public function add()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/private/events/{id}/edit", name="event_edit")
     */
    public function edit()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/events/{id}/delete", name="event_delete")
     */
    public function delete()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }
}
