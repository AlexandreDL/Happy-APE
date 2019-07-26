<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Event;
use Symfony\Component\Serializer\SerializerInterface;
use App\DataFixtures\AppFixtures;
use App\Repository\EventRepository;

class EventController extends AbstractController
{

    /**
     * @Route("/events", name="events_list")
     */
    public function list()
    {

        // return new JsonResponse(
        //     [
        //         'status' => 'ok',
        //     ]);

        $serializer = SerializerBuilder::create()->build();

        $data = array();

            for ($i = 1; $i <= 10; $i++){
                $event = new Event();
                $event->setName("Titre de l'événement n°$i")
                    ->setContent("<p>Contenu de l'événement n°$i</p>")
                    ->getMedia("http://placehold.it/350x150");
                    
                $data[] = $serializer->serialize($event, 'json');
            }

        $response = new Response();
        $response->setContent(json_encode($data));
        $response->send();
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
        $response = JsonResponse::fromJsonString('{ "data": 123 }');
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
