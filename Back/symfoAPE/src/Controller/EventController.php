<?php

namespace App\Controller;

use App\Repository\EventRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Event;

class EventController extends AbstractController {

    /**
     * @Route("/events", name="events_list")
     */
    public function list()
    {
        $data = array();

        for ($i = 1; $i <= 10; $i++){
            $event[$i] = new Event();
            $event[$i]->setName("Titre de l'événement n°$i")
                  ->setContent("<p>Contenu de l'événement n°$i</p>");
            $data[$i] = [
                "id" => $event[$i]->getId(),
                "name" => $event[$i]->getName(),
                "date" => $event[$i]->getDate(),
                "createdAt" => $event[$i]->getCreatedAt(),
                "updatedAt" => $event[$i]->getUpdatedAt(),
                "isPublished" => $event[$i]->getIsPublished(),
                "content" => $event[$i]->getContent()
            ];
        }
        
        return new JsonResponse($data);
    }

    /**
     * @Route("/eventsbis", name="events_listbis", methods={"GET"})
     */
    public function listbis(EventRepository $repository) {
        $events = $repository->findAll();
        dump($events);
        $response = new JsonResponse();
        $response->setData(['data' => $events]);
        
        dump($response);
        //$response = JsonResponse::fromJsonString('{ "data": 123 }');
    }

    // public function list() {
    //     $em = $this->getDoctrine()->getManager();
    //     $query = $em->createQuery(
    //         'SELECT c
    //         FROM AppBundle:Event'
    //     );
    //     $categorias = $query->getArrayResult();
    
    //     $response = new Response(json_encode($categorias));
    //     $response->headers->set('Content-Type', 'application/json');
    
    //     return $response;
    // }





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
